import React from 'react'
import '../Booking_Detail/Booking_Detail.css'
import Header from '../../components/header'

function Booking_Summary() {
  return (
    <div>
        <Header/>
        <div class="middle">
            <h1>Đặt chỗ của tôi</h1>
            <p style={{"marginTop":"-10px"}}>Điền thông tin và xem lại đặt chỗ.</p>
            
            <h2>Thông tin liên hệ</h2>
            <form>
                <table id='table'>
                    <tr id='tr'>
                        <th class="title">Họ và tên người liên hệ</th>
                        <th class="fixbttn"><button>Chỉnh sửa</button></th>
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
                        <th class="fixbttn"><button>Chỉnh sửa</button></th>
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

            <h2>Tiện nghi chuyến bay</h2>
            <form>
                <table id='table'>
                    <tr id='tr'>
                        <th class="title">Hành lý</th>
                        <th class="fixbttn"><button>Chọn hành lý</button></th>
                    </tr>
                    <tr id='tr'>
                        <td colspan="2" style={{"textAlign":"left"}}>
                            <br/><b>Đà Nẵng (DAD) ➔ TP HCM (SGN)</b></td>
                    </tr>
                    <tr id='tr'>
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
                <table id='table'>
                    <tr id='tr'>
                        <th class="title">Giá bạn trả</th>
                        <th class="fixbttn">1.000.000VND</th>
                    </tr>
                    <tr id='tr'>
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
            <a href="">Tiếp tục</a>
        </div>
    </div>
  )
}

export default Booking_Summary