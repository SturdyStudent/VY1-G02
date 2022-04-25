import React from 'react'
import SmallFlight from '../../assets/images/small_flight.png';
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
                        <img src={SmallFlight} width="40px" height="40px" style={{"float": "left"}}/>
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