import React, {useState, useEffect} from 'react'
import './PaymentPage.css'
import SuccessNotification from '../../components/SuccessNotification'
import Header from '../../components/header'
import { Lock } from '@material-ui/icons'
import { axiosConfig } from '../../axiosConfig'
import PaymentPartner from '../../assets/images/paymentPartner.png'
import axios from 'axios'
import { CardElement, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function PaymentPage() {
  const child = false, baby = false;
  const getPartnerUrl = `${axiosConfig.url}getPartners`;
  let flightInfo = JSON.parse(localStorage.getItem("SUMMARY_INFO"));
  let searchInfo = JSON.parse(localStorage.getItem("SEARCH_INFO"));
  let clientInfo = localStorage.getItem("CLIENT_INFO");
  const clientData = JSON.parse(clientInfo);

  function notifySuccess(e){
    e.preventDefault();
    setSuccess(true);
  }
  if(searchInfo.TreEm != 0){
    child = true;
  }
  if(searchInfo.EmBe != 0){
    baby = true;
  }
  const [success, setSuccess] = useState(false);
  const [tiep, setTiep] = useState(false);
  const [partnerName, setPartnerName] = useState(null);
  const totalPrice = searchInfo.NguoiLon * flightInfo.GiaVe + searchInfo.TreEm * flightInfo.GiaVe * 75/100 + searchInfo.EmBe * flightInfo.GiaVe * 25/100;
  useEffect(()=>{
    axios.get(getPartnerUrl)
    .then(response => {
        let valPartner = response.data.filter(partner => partner.MaHangBay === flightInfo.HangBay);
        setPartnerName(valPartner[0].TenHangBay);
    })
}, [getPartnerUrl])

  return (
    <div style={{"height":"1000px"}}>
      <Header></Header>
      <h3 className='payment-title'>Thanh toán</h3>
      <form className='payment-container' id='payment-form'>
        <table className='payment-container-table'>
          <tr>
            <td><h4>Thẻ thanh toán</h4></td>
            <td><img src={PaymentPartner} width="200px" /></td>
            {success && <SuccessNotification/>}
          </tr>
          <tr>
            <td colSpan={2}>
              <div>Số thẻ tín dụng</div>
              <input type="text" style={{"width":"100%"}} placeholder='16 chữ số mặt trên mặt thẻ' id='card-number'></input>
            </td>
          </tr>
          <tr>
            <td>
              <div>Hiệu lực đến</div>
              <input type="text" style={{"width":"100%"}} placeholder='MM/YY' id='card-expiry'></input>
            </td>
            <td>
              <div>CVV</div>
              <input type="text" style={{"width":"100%"}} placeholder='3 số CVV' id='card-cvc'></input>
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
          {searchInfo.NguoiLon && <tr  className='payment-price-detail'>
            <td style={{"paddingBottom":"10px"}}>
              <div>{partnerName} (Người lớn) x {searchInfo.NguoiLon}</div>
            </td>
            <td className='payment-price' style={{"textAlign":"right"}}>
              <span>{flightInfo.GiaVe * searchInfo.NguoiLon} VNĐ</span>
            </td>
          </tr>}
          {child && <tr  className='payment-price-detail'>
            <td style={{"paddingBottom":"10px"}}>
              <div>{partnerName} (Trẻ em) x {searchInfo.TreEm}</div>
            </td>
            <td className='payment-price' style={{"textAlign":"right"}}>
              <span>{flightInfo.GiaVe * searchInfo.NguoiLon} VNĐ</span>
            </td>
          </tr>}
          {baby && <tr  className='payment-price-detail'>
            <td style={{"paddingBottom":"10px"}}>
              <div>{partnerName} (Em bé) x {searchInfo.EmBe}</div>
            </td>
            <td className='payment-price' style={{"textAlign":"right"}}>
              <span>{flightInfo.GiaVe * searchInfo.NguoiLon} VNĐ</span>
            </td>
          </tr>}
          <tr  className='payment-price-detail payment-price-total'>
            <td style={{"paddingTop":"0px"}}>
              <div>Tổng giá tiền</div>
            </td>
            <td style={{"textAlign":"right", "paddingTop":"0px"}}>
              <h4>{totalPrice.toLocaleString()} VNĐ</h4>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="termcondition">
              <div>Bằng việc thanh toán, bạn đồng ý <a>Điều khoản & Điều kiện </a> và <a>Chính sách quyền riêng tư.</a></div>
              <div style={{"textAlign":"right"}} ><button className='btnPay' onClick={(e) => notifySuccess(e)}><Lock/>  Thanh toán Thẻ thanh toán</button></div>
            </td>
          </tr>
        </table>
        <div className='payment-container-summary'>
          <div>Mã đặt chỗ</div>
          <div>{Math.random().toString(36).substring(2, 15)}</div>
          <hr/>
          <div>
            <div style={{"paddingLeft":"0px"}}>CHUYẾN ĐI</div>
            <div>Chi tiết</div>
          </div>
          <div>Chuyến bay</div>
          <div>{searchInfo.NgayDi}</div>
          <ul>
            <li>{flightInfo.DiaDiemKhoiHanh} → {flightInfo.DiaDiemDen}</li>
          </ul>
          <hr/>
          <div>DANH SÁCH HÀNH KHÁCH</div>
          {[...Array(searchInfo.NguoiLon + searchInfo.TreEm + searchInfo.EmBe)].map((elementInArray, Index) => {
                    return <div>{clientData[Index + 1].inputData.xung} {clientData[Index + 1].inputData.ho} {clientData[Index + 1].inputData.ten}</div>
                    })}
          
        </div>
      </form>
    </div>
  )
}

export default PaymentPage