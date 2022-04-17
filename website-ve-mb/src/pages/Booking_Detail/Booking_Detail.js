import React from 'react'
import './Booking_Detail.css'
import Header from '../../components/header'

function Booking_Detail() {
  return (
      <div>
          <Header/>
        <div class="booking">
            <h1>Đặt chỗ của tôi</h1>
            <p style={{"marginTop":"-10px"}}>Điền thông tin và xem lại đặt chỗ.</p>
            <h2>Thông tin liên hệ</h2>
            <form>
                <table id='table'>
                    <tr id='tr'>
                        <th class="title">Họ và tên người liên hệ</th>
                        <th class="fixbttn"><button id='button'>Chỉnh sửa</button></th>
                    </tr>
                    <tr id='tr'>
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
                <table id='table'>
                    <tr id='tr'>
                        <th class="title">Họ và tên người đặt 1</th>
                        <th class="fixbttn"><button id='button'>Chỉnh sửa</button></th>
                    </tr>
                    <tr id='tr'>
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
            <a href="TienNghiChuyenBay.html" id='a'>forward</a>
        </div>
    </div>
  )
}

export default Booking_Detail