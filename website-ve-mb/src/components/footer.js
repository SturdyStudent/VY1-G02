import React from 'react'
import './footer.css'
import SponsorPic from '../assets/images/footer.jpg'

function footer() {
  return (
    <div id="footer">
      <table>
        <tr>
          <td rowSpan={6}> <img src={SponsorPic} width="300px"/></td>
          <td>Về Traveloka</td>
          <td>Sản phẩm</td>
          <td>Khác</td>
        </tr>
        <tr>
          <td>Cách đặt chỗ</td>
          <td>Vé máy bay</td>
          <td>Traveloka Affliate</td>
        </tr>
        <tr>
          <td>Liên hệ với chúng tôi</td>
          <td>Khách sạn</td>
          <td>Traveloka Blog</td>
        </tr>
        <tr>
          <td>Trợ giúp</td>
          <td>JR Pass</td>
          <td>Chính sách quyền riêng tư</td>
        </tr>
        <tr>
          <td>Tuyển dụng</td>
          <td>Combo tiết kiệm</td>
          <td>quyền riêng tư</td>
        </tr>
        <tr>
          <td>Về chúng tôi</td>
          <td>Điều khoản và điều kiện</td>
          <td>Xperience</td>
        </tr>
      </table>
    </div>
    
  )
}

export default footer