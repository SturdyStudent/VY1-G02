import React from 'react'
import '../Booking_Detail/Booking_Detail.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

function Booking_Fill_Info() {
  return (
      <div>
          <Header/>
        <div class="booking" >
            <h1>Đặt chỗ của tôi</h1>
            <p style={{"marginTop":"-10px"}}>Điền thông tin và xem lại đặt chỗ.</p>
        
            <h2>Thông tin liên hệ</h2>
            <form>
                <table class="bookinfo">
                    <tr>
                        <th class="booktitlelong">
                            Thông tin liên hệ (nhận vé/phiếu thanh toán)
                        </th>
                        <th class="bookfix">
                            <button class="bookfixbttn" id='button'>Lưu</button>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <br/><label for="holh">Họ (vd: Nguyen)</label><br/>
                            <input type="text" id="holh" name="holh"/><br/>
                            <p class="note">như trên CMND (không dấu)</p>
                        </td>
                        <td align='right'>
                            <br/><label for="tenlh">Tên Đệm & Tên (vd: Thi An)</label><br/>
                            <input type="text" id="tenlh" name="tenlh"/><br/>
                            <p class="note">như trên CMND (không dấu)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="dtlh">Điện thoại di động</label><br/>
                            <input type="text" id="tenlh" name="dtlh"/><br/>
                            <p class="note">vd: +84 901234567 trong đó +84 là
                                <br/> mã quốc gia và 901234567 là số di động</p>
                        </td>
                        <td align='right'>
                            <label for="maillh">Email</label><br/>
                            <input type="text" id="maillh" name="maillh"/><br/>
                            <p class="note">abc123@email.com</p>
                        </td>
                    </tr>
                </table>
            </form>
        
        <h2>Thông tin hành khách</h2>
        <form>
            <table class="bookinfo">
                <tr>
                    <th class="booktitle">Người đặt 1</th>
                    <th class="bookfix">
                        <button class="bookfixbttn" id='button'>Lưu</button>
                    </th>
                </tr>
                <tr>
                    <td>
                        <br/><label for="xungnhat">Danh xưng</label>
                        <select id="xungnhat" name="xung">
                            <option value="null"></option>
                            <option value="ong"> Ông </option>
                            <option value="ba"> Bà </option>
                            <option value="be"> Bé </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <br/><label for="honhat">Họ (vd: Nguyen)</label><br/>
                        <input type="text" id="honhat" name="ho"/><br/>
                        <p class="note">như trên CMND (không dấu)</p>
                    </td>
                    <td align='right'>
                        <br/><label for="tennhat">Tên Đệm & Tên (vd: Thi An)</label><br/>
                        <input type="text" id="tennhat" name="ten"/><br/>
                        <p class="note">như trên CMND (không dấu)</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="sinhnhat">Ngày sinh</label><br/>
                        <input type="text" id="sinhnhat" name="sinh"/><br/>
                        <p class="note">hành khách người lớn (trên 12 tuổi)</p>
                    </td>
                    <td align='right'>
                        <label for="quocnhat">Quốc tịch</label><br/>
                        <select  id="quocnhat" name="quoc">
                            <option value="null"></option>
                            <option value="vi">Việt Nam</option>
                            <option value="us">Mỹ</option>
                            <option value="uk">Vương Quốc Anh</option>
                        </select>
                    </td>
                </tr>
            </table>
        </form>
        <br/><br/>
        <div class="bookconfirm">
            <a href="">Tiếp tục</a>
        </div>
        </div>  
    </div>
  )
}

export default Booking_Fill_Info