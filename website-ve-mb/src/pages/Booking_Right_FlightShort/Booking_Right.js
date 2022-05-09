import React from 'react'
import SmallFlight from '../../assets/images/small_flight.png';
<<<<<<< HEAD
import Vietjet from '../../assets/images/vietjet.png';
=======
import VietJet from '../../assets/images/vietjet.png';
>>>>>>> 2c5dd3c35e04c1a0bd909b02d21d80fbc4a3f929
import '../Booking_Detail/Booking_Detail.css'

function BookingRight() {
  return (
    <div class="flightsimple">
        <form>
            <table class="bookinfo">
                <tr>
                    <th colSpan={2}>
                        <img src={SmallFlight} width="40px" height="40px"/>
                        <span>Đà Nẵng → TP HCM</span>
                    </th>
                    <th>
                        <div>Chi&nbsp;tiết</div>
                    </th>
                    <th></th>
                </tr>
                <tr><td colSpan={3}>
                        <span>Chuyến bay đi • Tue, 26 Apr 2022</span>
                </td></tr>
                <tr>
                    <td colSpan={3}>
<<<<<<< HEAD
                        <img src={Vietjet} width="80px" height="40px" style={{"float": "left"}}/>
=======
                        <img src={VietJet} width="80px" height="40px" style={{"float": "left"}}/>
>>>>>>> 2c5dd3c35e04c1a0bd909b02d21d80fbc4a3f929
                        <span>
                            Bamboo Airways<br/>
                            <div class="seatclassnote">Phổ thông</div>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        23:15<br/>
                        DAD
                    </td>
                    <td>
                        1h30m<br/>
                        Bay thẳng
                    </td>
                    <td>
                        00:45<br/>
                        SGN
                    </td>
                </tr>
                <tr><td colSpan={3}><div class="flightnote">
                    <span>Không hoàn tiền</span><br/>
                    <span>Có áp dụng đổi lịch bay</span>
                </div></td></tr>
            </table>
        </form>
    </div> 
  )
}

export default BookingRight