import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/header'
import SmallFlight from '../../assets/images/small_flight.png'
import MockRightArrow from '../../assets/images/mock_right_arrow.png'
import Vietjet from '../../assets/images/vietjet.png'
import Detail from '../../assets/images/detail.png'
import Line from '../../assets/images/line.png'
import {format} from 'date-fns';
import viLocale from 'date-fns/locale/vi'
import { Navigate } from 'react-router-dom'
import Checked from '../../assets/images/checked.png'
import { axiosConfig } from '../../axiosConfig'
import './PreBooking.css'

function PreBooking() {
    const [redirect, setRedirect] = useState(false);
    const [partners, setPartners] = useState();
    const [locations, setLocations] = useState(null);
    const [startLocation, setStartLocation] = useState("");
    const [endLocation, setEndLocation] = useState();
    const [partnerName, setPartnerName] = useState(null);
    const getPartnerUrl = `${axiosConfig.url}getPartners`;
    const locationUrl = `${axiosConfig.url}getLocations`;
    
    let flightInfo = JSON.parse(localStorage.getItem("SUMMARY_INFO"));
    let searchInfo = JSON.parse(localStorage.getItem("SEARCH_INFO"));

    var gioDi = format(new Date(flightInfo.NgayGioKhoiHanh), 'yyyy/MM/dd hh:mm:ss');
    var gioDen = format(new Date(flightInfo.NgayGioDen), 'yyyy/MM/dd hh:mm:ss');

    var day1 = new Date(gioDi); 
    var day2 = new Date(gioDen);

    var difference= Math.abs(day2-day1);
    var round = Math.floor(difference/(3600000));
    var spare = (difference % 3600000)/60000;
    
    const formatSearchNgayDi = format(new Date(flightInfo.NgayGioKhoiHanh), "iii, dd 'Thg' MM yyyy",{
        locale: viLocale
    });
    useEffect(()=>{
        axios.get(locationUrl)
        .then(response => {
            setLocations(response.data);
            let valStart = response.data.filter(location => location.MaDiaDiem === flightInfo.DiaDiemKhoiHanh);
            let valEnd = response.data.filter(location => location.MaDiaDiem === flightInfo.DiaDiemDen);
            setStartLocation(valStart[0].TenDiaDiem);
            setEndLocation(valEnd[0].TenDiaDiem);
        })
    }, [locationUrl])
    useEffect(()=>{
        axios.get(getPartnerUrl)
        .then(response => {
            let valPartner = response.data.filter(partner => partner.MaHangBay === flightInfo.HangBay);
            setPartnerName(valPartner[0].TenHangBay);
        })
    }, [getPartnerUrl])
    
    if(redirect){
        localStorage.setItem("TRANSFER_INFO", "nothing");
        return <Navigate to={"/booking-fill"} replace/>
    }
    const totalPrice = flightInfo.GiaVe * searchInfo.NguoiLon + flightInfo.GiaVe * 75 /100 * searchInfo.TreEm + flightInfo.GiaVe * 25/100 * searchInfo.EmBe;
return (
    <div>
        <Header/>
        <div className='prebooking-background-blue'></div>
        <div className='prebooking-container'>
            <div className='prebooking-header-card'>
                <div>
                    <h4><b>Chuyến bay từ {startLocation} tới {endLocation}</b></h4>
                    <div className='prebooking-header-card-sub'>
                        <div><span><img src={SmallFlight} width="30px"/></span></div>
                        <div>
                            <div>{startLocation} ({flightInfo.DiaDiemKhoiHanh}) → {endLocation} ({flightInfo.DiaDiemDen})    |   {formatSearchNgayDi.split(",")[1]}</div><br/>
                            <div>{searchInfo.NguoiLon} người lớn {searchInfo.TreEm} trẻ em {searchInfo.EmBe} em bé &nbsp;&nbsp; | &nbsp;&nbsp; {searchInfo.HangGhe}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='prebooking-sub-container'>
                <div className='prebooking-info'>
                    <div><img src={SmallFlight} width="50px" />Hà Nội (HAN) <span><img src={MockRightArrow} width="40px" /></span> Đà Nẵng (DAD)</div>
                    <div>Thông tin chuyến bay</div>
                    <hr/>
                    <div className='prebooking-info-date'>{formatSearchNgayDi}</div>
                    <div className='prebooking-info-container'>
                        <table>
                            <tr className='prebooking-info-container-first-row'>
                                <td rowSpan={2}><img src={Vietjet} width="70px" /></td>
                                <td className='prebooking-discount'>
                                    <div>{partnerName}</div><br></br>
                                    <div style={{"color":"#999ca0"}}>Khuyến mãi</div>
                                </td>
                                <td>
                                    <table className='prebooking-info-container-container'>
                                        <tr>
                                            <td>{format(new Date(flightInfo.NgayGioKhoiHanh),'HH:mm')}</td>
                                            <td rowSpan={2}>
                                                <div style={{"color":"#68717c","fontSize":"small"}}>{round}h {spare}m</div><br/>
                                                <img src={Line} width="150px " ></img><br/>
                                                <div style={{"color":"#68717c","fontSize":"small", "fontWeight":"bold"}}>Bay thẳng</div>
                                            </td>
                                            <td>{format(new Date(flightInfo.NgayGioDen),'HH:mm')}</td>
                                        </tr>
                                        <tr className='prebooking-info-container-bold'>
                                            <td>{flightInfo.DiaDiemKhoiHanh}</td>
                                            <td>{flightInfo.DiaDiemDen}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
               
                <div className='prebooking-right-column'>
                    <div className='prebooking-supplement-info'>
                        <div className='prebooking-header-supplement-info'>
                            <div><span><img src={Detail} width="40px" /></span>Thông tin bổ sung</div>
                            <div style={{"width":"50px","fontSize":"medium","fontWeight":"normal","marginLeft":"50px","color":"#1a7ed5", "textShadow":"initial"}} >Chi tiết</div>
                        </div>
                        <hr/>
                        <div className='prebooking-body-supplement-info'>
                            <div>{flightInfo.DiaDiemKhoiHanh} → {flightInfo.DiaDiemDen}</div><br/>
                            <div class="prebooking-detail-refund" style={{"margin":"0px","padding":"0px"}}>
                                <div><span><img src={Checked} width="30px" /></span>Có hoàn tiền</div><br/>
                                <div style={{"margin":"0px"}}><span><img src={Checked} width="30px" /></span>Có áp dụng đổi lịch bay</div>
                            </div>
                        </div>
                    </div>
                    <div className='prebooking-summary'>
                        <div>Tóm tắt</div>
                        <hr/>
                        {searchInfo && <div className='prebooking-summary-adult prebooking-summary-item'>
                            <div>{partnerName} (Người lớn) x{searchInfo.NguoiLon}</div>
                            <div>VNĐ {flightInfo.GiaVe * searchInfo.NguoiLon}</div>
                        </div>}
                        {searchInfo && <div className='prebooking-summary-adult prebooking-summary-item'>
                            <div>{partnerName} (Trẻ em) x{searchInfo.TreEm}</div>
                            <div>VNĐ {flightInfo.GiaVe * 75 / 100 * searchInfo.TreEm}</div>
                        </div>}
                        {searchInfo && <div className='prebooking-summary-adult prebooking-summary-item'>
                            <div>{partnerName} (Em bé) x{searchInfo.EmBe}</div>
                            <div>VNĐ {flightInfo.GiaVe * 25 / 100 * searchInfo.EmBe}</div>
                        </div>}
                        <div className='prebooking-summary-total-price prebooking-summary-item'>
                            <div>Gía bạn trả</div>
                            <div>VNĐ {totalPrice.toLocaleString()}</div>
                        </div>
                    </div>
                    <button style={{"marginBottom":"100px"}} onClick={() => setRedirect(true)}>Tiếp tục</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreBooking