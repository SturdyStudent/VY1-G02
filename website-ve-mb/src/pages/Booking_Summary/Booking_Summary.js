import React, {useState,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import '../Booking_Detail/Booking_Detail.css'
import Header from '../../components/header'
import BookingRight from '../Booking_Right_FlightShort/Booking_Right'

function Booking_Summary() {    
   const [tiep, setTiep] = useState(false);

   if(tiep){
    return <Navigate to={"/payment"} replace/>
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
                                <button class="bookfixbttn">Chỉnh sửa</button>
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
                                <button class="bookfixbttn">Chỉnh sửa</button>
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

                <h2>Tiện nghi chuyến bay</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Hành lý</th>
                            <th class="bookfix">
                                <button>Chọn hành lý</button>
                            </th>
                        </tr>
                        <tr>
                            <td colspan="2" style={{"textAlign":"left"}}>
                                <br/><b>Đà Nẵng (DAD) ➔ TP HCM (SGN)</b></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Họ và tên người đặt 1<br/>
                                Họ và tên người đặt 2</p>
                            </td>
                            <td>
                                <p>0 kg 000.000VND<br/>
                                15 kg 176.142VND</p>
                            </td>
                        </tr>
                    </table>
                </form>

                <h2>Tóm tắt</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Giá bạn trả</th>
                            <th class="bookfix">1.000.000VND</th>
                        </tr>
                        <tr>
                            <td>
                                <p>VietJet Air (Người lớn)<br/>
                                Vietravel Airlines (Người lớn)<br/>
                                Hành lí đến TP HCM</p>
                            </td>
                            <td>
                                <p>849.320VND<br/>
                                649.320VND<br/>
                                176.142VND</p>
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