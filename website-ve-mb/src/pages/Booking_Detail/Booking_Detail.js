import React, {useState,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import '../Booking_Detail/Booking_Detail.css'
import Header from '../../components/header'
import BookingRight from '../Booking_Right_FlightShort/Booking_Right'

function Booking_Detail() {
    const [tiep, setTiep] = useState(false);
 
    if(tiep){
     return <Navigate to={"/booking-summary"} replace/>
    };
    
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
                                +84901234567</p>
                            </td>
                            <td>
                                <p>Email<br/>
                                abc123@email.com</p>
                            </td>
                        </tr>
                    </table>
                </form>

                <h2>Thông tin hành khách</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Họ và tên người đặt 1</th>
                            <th class="bookfix">
                                <button class="bookfixbttn" id='button'>Chỉnh sửa</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>Ngày sinh<br/>
                                01 tháng 01 2001</p>
                            </td>
                            <td>
                                <p>Quốc tịch<br/>
                                Việt Nam</p>
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

export default Booking_Detail