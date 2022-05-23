import React, {useState,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import '../Booking_Detail/Booking_Detail.css'
import axios from 'axios';
import { axiosConfig } from '../../axiosConfig';
import Header from '../../components/header'
import BookingRight from '../Booking_Right_FlightShort/Booking_Right'

function Booking_Summary() {    
   const [tiep, setTiep] = useState(false);
   const [partnerName, setPartnerName] = useState(null);
   const getPartnerUrl = `${axiosConfig.url}getPartners`;
   let flightInfo = JSON.parse(localStorage.getItem("SUMMARY_INFO"));
   let searchInfo = JSON.parse(localStorage.getItem("SEARCH_INFO"));
    const clientInfo = JSON.parse(localStorage.getItem("CLIENT_INFO"));
    console.log("data", clientInfo);

    useEffect(()=>{
        axios.get(getPartnerUrl)
        .then(response => {
            let valPartner = response.data.filter(partner => partner.MaHangBay === flightInfo.HangBay);
            setPartnerName(valPartner[0].TenHangBay);
        })
    }, [getPartnerUrl])

   if(tiep){
    return <Navigate to={"/payment"} replace/>
   };
  return (
    <div>
    <Header/>
        <div class="booking">
            <div class="personinfo">
                <h1>Đặt chỗ của tôi</h1>
                <p style={{"marginTop":"-10px"}}>Điền thông tin và xem lại đặt chỗ.</p>
                
                <h2>Thông tin liên hệ</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">{clientInfo[0].inputData.holh} {clientInfo[0].inputData.tenlh}</th>
                            <th class="bookfix">
                                <button class="bookfixbttn">Chỉnh sửa</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>Số di động<br/>
                                +{clientInfo[0].inputData.dtlh}</p>
                            </td>
                            <td>
                                <p>Email<br/>
                                {clientInfo[0].inputData.maillh}</p>
                            </td>
                        </tr>
                    </table>
                </form>

                <h2>Thông tin hành khách</h2>
                {[...Array(searchInfo.NguoiLon + searchInfo.TreEm + searchInfo.EmBe)].map((elementInArray, Index) => {
                    return  <form >
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">{clientInfo[Index + 1].inputData.xung} {clientInfo[Index + 1].inputData.ho} {clientInfo[Index + 1].inputData.ten}</th>
                            <th class="bookfix">
                                <button class="bookfixbttn">Chỉnh sửa</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>Ngày sinh<br/>
                                {clientInfo[Index + 1].inputData.sinh}</p>
                            </td>
                            <td>
                                <p>Quốc tịch<br/>
                                Việt Nam</p>
                            </td>
                        </tr>
                    </table>
                </form>})}

                <h2>Tiện nghi chuyến bay</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Hành lý</th>
                            <th class="bookfix btn-bookfix">
                                <button>Chọn hành lý</button>
                            </th>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <br/>
                                <b>Chuyến bay này không có hành lí chọn thêm</b>
                            </td>
                        </tr>
                    </table>
                </form>

                <h2>Tóm tắt</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Giá bạn trả</th>
                            <th class="bookfix total-bookfix">{(flightInfo.GiaVe * searchInfo.NguoiLon + flightInfo.GiaVe * 75/100 * searchInfo.TreEm + searchInfo.EmBe * flightInfo.GiaVe * 25/100).toLocaleString()} VNĐ</th>
                        </tr>
                        <tr>
                            <td>
                                <p>{partnerName} (Người lớn)x {searchInfo.NguoiLon}<br/>
                                {partnerName} (Trẻ em) x{searchInfo.TreEm}<br/>
                                {partnerName} (Em bé) x{searchInfo.EmBe}<br/>
                                <span style={{"color":"#318785"}}>Hành lí đến {searchInfo.DiaDiemDi}</span></p>
                            </td>
                            <td style={{"textAlign":"right","fontWeight":"600"}}>
                                <p>{flightInfo.GiaVe * searchInfo.NguoiLon} x{searchInfo.NguoiLon}<br/>
                                {flightInfo.GiaVe * 75/100 * searchInfo.TreEm}<br/>
                                {flightInfo.GiaVe * 25/100 * searchInfo.EmBe}<br/>
                                <span style={{"color":"#318785"}}>MIỄN PHÍ</span></p>
                            </td>
                        </tr>
                    </table>
                </form>
                <br/><br/>
                <div class="bookconfirm">
                    <a href="#" onClick={() => setTiep(true)}>Tiếp tục</a>
                </div>
            </div>

            <BookingRight/>
        </div>
    </div>
  )
}

export default Booking_Summary