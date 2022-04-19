import React, {useState, useEffect} from 'react'
import Header from '../../components/header'
import East from '../../assets/images/right_arrow.png';
import SearchIcon from '../../assets/images/search_icon.png'
import Vietjet from '../../assets/images/vietjet.png'
import {format,differenceInMinutes} from 'date-fns';
import Line from '../../assets/images/line.png'
import './FlightSearchResult.css';
import axios from 'axios';

function FlightSearchResult() {
    const getFlightUrl = "http://localhost:3001/api/partner/getFlights";
    const getPartnerUrl = "http://localhost:3001/api/partner/getPartners";

    const [flightInfo, setFlightInfo] = useState(null);
    const [locations, setLocations] = useState(null);
    const [partners, setPartners] = useState(null);
    const [allowPartnerName, setAllowPartnerName] = useState(false);

    const [SoHieuChuyenBay, setSoHieuChuyenBay] = useState();
    const [DiaDiemKhoiHanh, setDiaDiemKhoiHanh] = useState();
    const [DiaDiemDen, setDiaDiemDen] = useState();
    const [NgayGioKhoiHanh, setNgayGioKhoiHanh] = useState();
    const [NgayGioDen, setNgayGioDen] = useState();
    const [TongSoVe, setTongSoVe] = useState();
    const [GiaVe, setGiaVe] = useState();
    const [SoDoGheNgoi, setSoDoGheNgoi] = useState();
    const [KhoangCachGhe, setKhoangCachGhe] = useState();
    const [LoaiMayBay, setLoaiMayBay] = useState();
    const [TrangThai, setTrangThai] = useState();
    const [HangBay, setHangBay] = useState();
    const [PhoThong, setPhoThong] = useState();
    const [UuDaiPhoThong, setUuDaiPhoThong] = useState();
    const [SoVePhoThong, setSoVePhoThong] = useState();
    const [PhoThongDacBiet, setPhoThongDacBiet] = useState();
    const [UuDaiDacBiet, setUuDaiDacBiet] = useState();
    const [SoVeDacBiet, setSoVeDacBiet] = useState();
    const [ThuongGia, setThuongGia] = useState();
    const [UuDaiThuongGia, setUuDaiThuongGia] = useState();
    const [SoVeThuongGia, setSoVeThuongGia] = useState();
    const [HangNhat, setHangNhat] = useState();
    const [UuDaiHangNhat, setUuDaiHangNhat] = useState();
    const [SoVeHangNhat, setSoVeHangNhat] = useState();
  
    const handleSoHieuChuyenBay = e => setSoHieuChuyenBay(e.target.value);
    const handleDiaDiemKhoiHanh = e => setDiaDiemKhoiHanh(e.target.value);
    const handleDiaDiemDen = e => setDiaDiemDen(e.target.value);
    const handleNgayGioKhoiHanh = e => setNgayGioKhoiHanh(e.target.value);
    const handleNgayGioDen = e => setNgayGioDen(e.target.value);
    const handleTongSoVe = e => setTongSoVe(e.target.value);
    const handleGiaVe = e => setGiaVe(e.target.value);
    const handleSoDoGheNgoi = e => setSoDoGheNgoi(e.target.value);
    const handleKhoangCachGhe = e => setKhoangCachGhe(e.target.value);
    const handleLoaiMayBay = e => setLoaiMayBay(e.target.value);
    const handleTrangThai = e => setTrangThai(e.target.value);
    const handleHangBay = e => setHangBay(e.target.value);
    const handlePhoThong = e => setPhoThong(e.target.value);
    const handleUuDaiPhoThong = e => setUuDaiPhoThong(e.target.value);
    const handleSoVePhoThong = e => setSoVePhoThong(e.target.value);
    const handlePhoThongDacBiet = e => setPhoThongDacBiet(e.target.value);
    const handleUuDaiDacBiet = e => setUuDaiDacBiet(e.target.value);
    const handleSoVeDacBiet = e => setSoVeDacBiet(e.target.value);
    const handleThuongGia = e => setThuongGia(e.target.value);
    const handleUuDaiThuongGia = e => setUuDaiThuongGia(e.target.value);
    const handleSoVeThuongGia = e => setSoVeThuongGia(e.target.value);
    const handleHangNhat = e => setHangNhat(e.target.value);
    const handleUuDaiHangNhat = e => setUuDaiHangNhat(e.target.value);
    const handleSoVeHangNhat = e => setSoVeHangNhat(e.target.value);
    const diaDiem = localStorage.getItem("SEARCH_INFO");

    const handlePartnerName = (partnerName, nameList) => {
        nameList.forEach(element => {
            if(partnerName == element.MaHangBay){
                return element.TenHangBay;
            }
        });
    }

    useEffect(()=>{
        axios.get(getFlightUrl)
        .then(response => {
           setFlightInfo(response.data);
        })
      }, [getFlightUrl]);

    useEffect(()=>{
    axios.get(getPartnerUrl)
    .then(response => {
          setPartners(response.data);
        })
      }, [getPartnerUrl]);

  return (
    <div>
        <Header/>
        <div class="search-header">
            <div class="center-search">
                <div class="search-header-info">
                    <div class="search-location">
                        {diaDiem}
                        <b>TP HCM(SGN) <img src={East}/> Đà Nẵng (DAD)</b>
                    </div>
                    <div>T2, 18 Thg 04 2022  |  1 passengers  |  Phổ thông</div>
                </div>
                <div class="search-header-change">
                    <div>
                        <button><b><img src={SearchIcon} width="18px"/> Đổi tìm kiếm</b></button>
                    </div>
                </div>
            </div>
        </div>
        {flightInfo && (flightInfo.map(function (flights) {
            var gioDi = format(new Date(flights.NgayGioKhoiHanh), 'yyyy/MM/dd hh:mm:ss');
            var gioDen = format(new Date(flights.NgayGioDen), 'yyyy/MM/dd hh:mm:ss');

            var day1 = new Date(gioDi); 
            var day2 = new Date(gioDen);

            var difference= Math.abs(day2-day1);
            var round = Math.floor(difference/(3600000));
            var spare = (difference % 3600000)/60000;
            return (<div class="search-result">
              <div class="search-result-item">
                  <div>
                      <div class="search-result-partner"><img src={Vietjet} width="80px"/> <b>
                        {flights.HangBay}</b></div>
                      <div class="search-result-route">
                          <table>
                              <tr>
                                  <td><b>{format(new Date(flights.NgayGioKhoiHanh),'HH:mm')}</b></td>
                                  <td rowSpan={2} style={{"color":"#7e858a"}}>
                                      <div>{round}h {spare}m</div>
                                      <div><img src={Line}/></div>
                                      <div>Bay thẳng</div>
                                  </td>
                                  <td><b>{format(new Date(flights.NgayGioDen),'HH:mm')}</b></td>
                              </tr>
                              <tr class="search-result-location">
                                  <td>
                                      <div>{flights.DiaDiemKhoiHanh}</div>
                                  </td>
                                  <td>
                                      <div>{flights.DiaDiemDen}</div>
                                  </td>
                              </tr>
                          </table>
                      </div>
                      <div class="search-result-cost">
                          <div>
                              <b><span class="search-highligh-btn">{flights.GiaVe.toLocaleString()}  VNĐ</span></b>
                              <span style={{"color":"#687176", "fontWeight":"550"}}>/khách</span>
                            </div>
                          <div><button class="btnPickFlight" >Chọn</button></div>
                      </div>
                  </div>
                  <div>
                      <div class="btn-flight-detail">Chi tiết chuyến bay</div>
                      <div class="btn-ticket-detail">Chi tiết vé</div>
                  </div>
                </div>
            </div>)}
        ))}
          
    </div>
  )
}

export default FlightSearchResult