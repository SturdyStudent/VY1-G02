import React, {useState} from 'react'
import './PaymentPage.css'
import Header from '../../components/header'
import { Lock } from '@material-ui/icons'
import PaymentPartner from '../../assets/images/paymentPartner.png'
import Footer from '../../components/footer'

function PaymentPage() {
  const [changeStyle, setChangeStyle] = useState();
  const handleApplyCoupon = () =>{

  }
  return (
    <div style={{"height":"1000px"}}>
      <Header></Header>
      <h3 className='payment-title'>Thanh toán</h3>
      <div className='payment-container'>
        <table className='payment-container-table'>
          <tr>
            <td><h4>Thẻ thanh toán</h4></td>
            <td><img src={PaymentPartner} width="200px"  /></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div>Số thẻ tín dụng</div>
              <input type="text" style={{"width":"100%"}} placeholder='16 chữ số mặt trên mặt thẻ'></input>
            </td>
          </tr>
          <tr>
            <td>
              <div>Hiệu lực đến</div>
              <input type="text" style={{"width":"100%"}} placeholder='MM/YY' ></input>
            </td>
            <td>
              <div>CVV</div>
              <input type="text" style={{"width":"100%"}} placeholder='3 số CVV' ></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div>Tên trên thẻ</div>
              <input type="text" style={{"width":"100%"}} placeholder='Tên trên thẻ' ></input>
              <hr style={{"margin":"0px","marginTop":"10px"}}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div>Chọn trả góp</div>
              <a style={{"marginTop":"10px"}}>Learn more</a>
            </td>
          </tr>
          <tr>
            <td>
              <div>Nhập mã giảm giá</div>
              <input type="text" placeholder='VD: CHEAP TRAVEL'/>
            </td>
            <td>
              <button>Áp dụng mã</button>
            </td>
          </tr>
          <tr className='payment-between'></tr>
          <tr className='payment-price-detail'>
            <td colSpan={2}>
              <h4>Chi tiết giá</h4>
            </td>
          </tr>
          <tr  className='payment-price-detail'>
            <td style={{"paddingBottom":"10px"}}>
              <div>Vietnam Airlines (Người lớn) x 1</div>
            </td>
            <td className='payment-price' style={{"textAlign":"right"}}>
              <span>1.051.000 VNĐ</span>
            </td>
          </tr>
          <tr  className='payment-price-detail payment-price-total'>
            <td style={{"paddingTop":"0px"}}>
              <div>Tổng giá tiền</div>
            </td>
            <td style={{"textAlign":"right", "paddingTop":"0px"}}>
              <h4>1.051.000 VNĐ</h4>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="termcondition">
              <div>Bằng việc thanh toán, bạn đồng ý <a>Điều khoản & Điều kiện </a> và <a>Chính sách quyền riêng tư.</a></div>
              <div style={{"textAlign":"right"}} ><button className='btnPay' ><Lock/>  Thanh toán Thẻ thanh toán</button></div>
            </td>
          </tr>
        </table>
        <div className='payment-container-summary'>
          <div>Mã đặt chỗ</div>
          <div>804263823</div>
          <hr/>
          <div>
            <div style={{"paddingLeft":"0px"}}>CHUYẾN ĐI</div>
            <div>Chi tiết</div>
          </div>
          <div>Chuyến bay</div>
          <div>26 apr 2022</div>
          <ul>
            <li>Hà Nội (HAN) → Đà Nẵng (DAD)</li>
          </ul>
          <hr/>
          <div>DANH SÁCH HÀNH KHÁCH</div>
          <div>Ông Trần Thành Đạt <span>Người lớn</span></div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage