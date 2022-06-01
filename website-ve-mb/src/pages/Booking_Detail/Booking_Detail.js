import React, {useState,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import '../Booking_Detail/Booking_Detail.css'
import Header from '../../components/header'
import BookingRight from '../Booking_Right_FlightShort/Booking_Right'

function Booking_Detail() {
    const [tiep, setTiep] = useState(false);
    let summaryInfo = JSON.parse(localStorage.getItem("SUMMARY_INFO"));
    let searchInfo = JSON.parse(localStorage.getItem("SEARCH_INFO"));
    let clientInfo = localStorage.getItem("CLIENT_INFO");

    const clientData = JSON.parse(clientInfo);
    

    if(tiep){
     return <Navigate to={"/booking-summary"} replace/>
    };
    // console.log("realdata", realdata[0].inputData.holh);
  return (
      <div>
      <Header/>
        <div class="booking">
            <div class="personinfo">
                <h1>Đặt chỗ của tôi</h1>
                <p>Điền thông tin và xem lại đặt chỗ.</p>

                <h2>Thông tin liên hệ</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Họ và tên người liên hệ</th>
                            <th class="bookfix">
                                <button class="bookfixbttn" id='button'>Chỉnh sửa</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>Số di động<br/>
                                +{clientData[0].inputData.dtlh}</p>
                            </td>
                            <td>
                                <p>Email<br/>
                                {clientData[0].inputData.maillh}</p>
                            </td>
                        </tr>
                    </table>
                </form>

                <h2>Thông tin hành khách</h2>
                {[...Array(searchInfo.NguoiLon + searchInfo.TreEm + searchInfo.EmBe)].map((elementInArray, Index) => {
                    return  <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">{clientData[Index + 1].inputData.xung} {clientData[Index + 1].inputData.ho} {clientData[Index + 1].inputData.ten}</th>
                            <th class="bookfix ">
                                <button class="bookfixbttn" id='bookfixbttn'>Chỉnh sửa</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>Ngày sinh<br/>
                                {clientData[Index + 1].inputData.sinh}</p>
                            </td>
                            <td>
                                <p>Quốc tịch<br/>
                                Việt Nam</p>
                            </td>
                        </tr>
                    </table>
                </form>
                })}
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

export default Booking_Detail