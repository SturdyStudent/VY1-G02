import React, {useState, useEffect} from 'react';
import './FlightModal.css';
import axios from 'axios';

const EditFlightModal = ({flightParams}) => {

  const url = "http://localhost:3001/api/partner/getLocations";
  const getFlighstUrl = `http://localhost:3001/api/partner/getFlights/${flightParams}`;
  const getSeatClassUrl = `http://localhost:3001/api/partner/getSeatClass/${flightParams}`;
  
  const [locations, setLocations] = useState(null);
  const [flightInfo, setFlightInfo] = useState(null);
  const [MaChuyenBay, setMaChuyenBay] = useState();
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

  const handleMaChuyenBay = e => setMaChuyenBay(e.target.value);
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

  const handleGetFlights = (flightInfo) =>{
    var gioDen = flightInfo.NgayGioKhoiHanh;
    var gioDi = flightInfo.NgayGioDen;
    setSoHieuChuyenBay(flightInfo.SoHieuChuyenBay);
    setDiaDiemKhoiHanh(flightInfo.DiaDiemKhoiHanh);
    setDiaDiemDen(flightInfo.DiaDiemDen);
    setNgayGioKhoiHanh(gioDi.slice(0, -8));
    setNgayGioDen(gioDen.slice(0, -8));
    setTongSoVe(flightInfo.TongSoVe);
    setGiaVe(flightInfo.GiaVe);
    setSoDoGheNgoi(flightInfo.SoDoGheNgoi);
    setKhoangCachGhe(flightInfo.KhoangCachGhe);
    setLoaiMayBay(flightInfo.LoaiMayBay);
    setTrangThai(flightInfo.TrangThai);
    setHangBay(flightInfo.HangBay);
  }
  const handleGetSeatClass = (seatInfo) =>{
    setPhoThong(seatInfo.PhoThong);
    setSoVePhoThong(seatInfo.SoVePhoThong);
    setUuDaiPhoThong(seatInfo.UuDaiPhoThong);
    setPhoThongDacBiet(seatInfo.PhoThongDacBiet);
    setSoVeDacBiet(seatInfo.SoVeDacBiet);
    setUuDaiDacBiet(seatInfo.UuDaiDacBiet);
    setThuongGia(seatInfo.ThuongGia);
    setSoVeThuongGia(seatInfo.SoVeThuongGia);
    setUuDaiThuongGia(seatInfo.UuDaiThuongGia);
    setHangNhat(seatInfo.HangNhat);
    setSoVeHangNhat(seatInfo.SoVeHangNhat);
    setUuDaiHangNhat(seatInfo.UuDaiHangNhat);
  }

  const handleEditFlight = (e) =>{
    axios.put(getFlighstUrl, {
      flightId: `${flightParams}`,
      SoHieuChuyenBay: `${SoHieuChuyenBay}`,
      DiaDiemKhoiHanh: `${DiaDiemKhoiHanh}`,
      DiaDiemDen: `${DiaDiemDen}`,
      NgayGioKhoiHanh: `${NgayGioKhoiHanh}`,
      NgayGioDen: `${NgayGioDen}`,
      TongSoVe: Number(TongSoVe),
      GiaVe: Number(GiaVe),
      SoDoGheNgoi: `${SoDoGheNgoi}`,
      KhoangCachGhe: Number(KhoangCachGhe),
      LoaiMayBay: `${LoaiMayBay}`,
      TrangThai: `${TrangThai}`,
      HangBay: `${HangBay}`,
      PhoThong: Number(PhoThong),
      UuDaiPhoThong : `${UuDaiPhoThong}`,
      SoVePhoThong : Number(SoVePhoThong),
      PhoThongDacBiet : Number(PhoThongDacBiet),
      UuDaiDacBiet: `${UuDaiDacBiet}`,
      SoVeDacBiet: Number(SoVeDacBiet),
      ThuongGia: Number(ThuongGia),
      UuDaiThuongGia: `${UuDaiThuongGia}`,
      SoVeThuongGia: Number(SoVeThuongGia),
      HangNhat: Number(HangNhat),
      UuDaiHangNhat: `${UuDaiHangNhat}`,
      SoVeHangNhat: Number(SoVeHangNhat)
    }).then((res)=>{
      window.location.reload();
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
      axios.get(url)
      .then(response => {
          setLocations(response.data);
      })
  }, [url])
  useEffect(()=>{
    axios.get(getFlighstUrl)
    .then(response => {
       handleGetFlights(response.data[0]);
    })
}, [url])
useEffect(()=>{
  axios.get(getSeatClassUrl)
  .then(response => {
     handleGetSeatClass(response.data[0]);
  })
}, [url])
  return (
    <div class="modal-background">
      <div class='modal-container'>
        <form id='modal-form'>
          <div id='title' style={{"textAlign":"center"}}><h2><b>Cập nhật chuyến bay</b></h2></div>
          <table class="table">
            <tr class="tr">
              <td class="td">
                <div>Mã chuyến bay:</div>
                <input type="text" maxLength={10} value={flightParams}></input>
              </td>
              <td>
                <div>Trạng thái chuyến bay:</div>
                <input type="text" maxLength={50} value={TrangThai} onChange={handleTrangThai}></input>
              </td>
            </tr>
            <tr >
              <td>
                <div>Số hiệu chuyến bay:</div>
                <input type="text" maxLength={10} value={SoHieuChuyenBay} onChange={handleSoHieuChuyenBay}></input>
              </td>
              <td>
                <div>Hãng Bay:</div>
                <input type="text" maxLength={10} value={HangBay} onChange={handleHangBay}></input>
              </td>
            </tr>
            <tr >
              <td>
                <div>Ngày/giờ khởi hành:</div>
                <input type="datetime-local" value={NgayGioKhoiHanh} onChange={handleNgayGioKhoiHanh}></input>
              </td>
              <td>
                <div>Ngày/giờ đến nơi:</div>
                <input type="datetime-local" value={NgayGioDen} onChange={handleNgayGioDen}></input>
              </td>
            </tr>
            <tr >
              <td>
                <div>Địa điểm khởi hành:</div><br/>
                  <select style={{"width":"200px", "height":"30px"}} onChange={handleDiaDiemKhoiHanh}>
                    <option value={DiaDiemKhoiHanh}>Không xác định</option>
                    {locations &&  (locations.map(location =>
                      <option value={location.MaDiaDiem}>{location.TenDiaDiem}</option>
                    ))}
                  </select> 
              </td>
              <td>
                <div>Địa điểm đến:</div><br/>
                <select style={{"width":"200px", "height":"30px"}} onChange={handleDiaDiemDen}>
                    <option value={DiaDiemDen}>Không xác định</option>
                    {locations &&  (locations.map(location =>
                      <option value={location.MaDiaDiem}>{location.TenDiaDiem}</option>
                    ))}
                  </select> 
              </td>
            </tr>
            <tr >
              <td>
                <div>Giá vé:</div>
                <div id='input-container'>
                  <span>VNĐ</span>
                  <input type="number" value={GiaVe} onChange={handleGiaVe}></input>
                </div>
              </td>
              <td>
                <div>Loại máy bay:</div>
                <input type="text" value={LoaiMayBay} onChange={handleLoaiMayBay}></input>
              </td>
            </tr>
            <tr >
              <td>
                <div>Sơ đồ ghế ngồi:</div>
                <input type="text" maxLength={10} value={SoDoGheNgoi} onChange={handleSoDoGheNgoi}></input>
              </td>
              <td>
                <div>Khoảng cách ghế:</div>
                <input type="number" value={KhoangCachGhe} onChange={handleKhoangCachGhe}></input>
              </td>
            </tr>
            <tr >
              <td style={{"marginRight":"200px"}}>
                <div>Số vé:</div>
                <input type="number" maxLength={10} value={TongSoVe} onChange={handleTongSoVe}></input>
              </td>
              <td>
              </td>
            </tr>
          </table>
          <hr style={{"height":"1.5px","backgroundColor":"gray"}}></hr>
          <h2 style={{"textAlign":"center"}}><b>Cập nhật Hạng Vé</b></h2>
          <table class="table">
            <tr >
              <td>
                <div>Gía vé phổ thông:</div>
                <input type="number" maxLength={10} value={PhoThong} onChange={handlePhoThong}></input>
              </td>
              <td>
                <div>Số vé phổ thông:</div>
                <input type="number" maxLength={10} value={SoVePhoThong} onChange={handleSoVePhoThong}></input>
              </td>
            </tr>
            <tr>
              <td>
                <div>Ưu đãi cho hạng vé phổ thông:</div><br/>
                <textarea style={{"width":"400px", "height":"100px"}} value={UuDaiPhoThong} onChange={handleUuDaiPhoThong}></textarea>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>
                <div>Gía vé phổ thông đặc biệt:</div>
                <input type="number" maxLength={10} value={PhoThongDacBiet} onChange={handlePhoThongDacBiet}></input>
              </td>
              <td>
                <div>Số vé phổ thông đặc biệt:</div>
                <input type="number" maxLength={10} value={SoVeDacBiet} onChange={handleSoVeDacBiet}></input>
              </td>
            </tr>
            <tr>
              <td>
                <div>Ưu đãi cho hạng vé phổ thông đặc biệt:</div><br/>
                <textarea style={{"width":"400px", "height":"100px"}} value={UuDaiDacBiet} onChange={handleUuDaiDacBiet}></textarea>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>
                <div>Gía vé hạng nhất:</div>
                <input type="number" maxLength={10} value={HangNhat} onChange={handleHangNhat}></input>
              </td>
              <td>
                <div>Số vé hạng nhất:</div>
                <input type="number" maxLength={10} value={SoVeHangNhat} onChange={handleSoVeHangNhat}></input>
              </td>
            </tr>
            <tr>
              <td>
                <div>Ưu đãi cho vé hạng nhất:</div><br/>
                <textarea style={{"width":"400px", "height":"100px"}} value={UuDaiHangNhat} onChange={handleUuDaiHangNhat}></textarea>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>
                <div>Gía vé thương gia:</div>
                <input type="number" maxLength={10} value={ThuongGia} onChange={handleThuongGia}></input>
              </td>
              <td>
                <div>Số vé hạng thương gia:</div>
                <input type="number" maxLength={10} value={SoVeThuongGia} onChange={handleSoVeThuongGia}></input>
              </td>
            </tr>
            <tr>
              <td>
                <div>Ưu đãi cho hạng vé thương gia:</div><br/>
                <textarea style={{"width":"400px", "height":"100px"}} value={UuDaiThuongGia} onChange={handleUuDaiThuongGia}></textarea>
              </td>
              <td>
              </td>
            </tr>
          </table>
          <div class="button-modal" style={{"zIndex":"1000"}}>
                        <input type="submit" value="LƯU" onClick={handleEditFlight} id="btnSubmit"/>
                        <button class="cancel" id="btnCancel">HỦY</button>
                      </div>
        </form>
      </div>
    </div>
  )
}

export default EditFlightModal
