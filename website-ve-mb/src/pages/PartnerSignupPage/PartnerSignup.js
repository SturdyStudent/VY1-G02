import React, {useState} from 'react';
import Logo from '../../assets/images/traveloka_pic.png';
import Header from '../../components/header'
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import '../PartnerLoginPage/PartnerLoginPage.css'

function PartnerSignup() {
const [MaHangBay, setMaHangBay] = useState('');
const [TenHangBay, setTenHangBay] = useState('');
const [TenDangNhap, setTenDangNhap] = useState('');
const [HinhAnhHangBay, setHInhAnhHangBay] = useState();
const [MatKhau, setMatKhau] = useState('');
const [SoHanhLi, setSoHanhLi] = useState();
const [redirectHome,setRedirectHome] = useState(false);
const registerPartner = "http://localhost:3001/api/partner/getPartners";

if(redirectHome){// chuyển hướng đến trang partner sau khi đăng kí thành công
    return <Navigate to={'/partner'} replace/>
}

const changeMaHangBay = e => setMaHangBay(e.target.value);
const changeTenHangBay = e => setTenHangBay(e.target.value);
const changeTenDangNhap = e => setTenDangNhap(e.target.value);
const changeMatKhau = e => setMatKhau(e.target.value);
const changeHanhLi = e => setSoHanhLi(e.target.value);

const handleRegister = (e) =>{
    axios.post(registerPartner, {
        MaHangBay:`${MaHangBay}`,
        TenHangBay: `${TenHangBay}`,
        HinhAnhHangBay: null,
        TenDangNhap: `${TenDangNhap}`,
        MatKhau: `${MatKhau}` ,
        SoHanhLiXachTay: Number(SoHanhLi)
      }).then((res) => {
        localStorage.setItem('USER_LOGIN_INFORMATION', JSON.stringify(res.data));
        if(res.status == 201) {
            setRedirectHome(true)
        }
     })
     .catch((error) => {
     console.error(error)
    });
      e.preventDefault();
}

  return (
    <div class="bg" className='partner-login' style={{"backgroundColor":"black", "height": "1100px"}}>
        <div style={{"background":"white", "paddingBottom":"10px"}}><Header></Header></div>
        <div id='white-container-signup'>
            <div><img src={Logo} height="40px" style={{"position":"absolute","right":"48%", "transform":"translate(50%, 50%)"}}></img></div>
            <div id='inner-container'>
                <div><h3 style={{ "fontSize":"20px", "fontWeight":"600"}}>Tạo Tài Khoản Partner Mới</h3></div>
                <p style={{"color":"#454545"}}>Lên danh sách những chuyến bay tại Traveloka và để chúng tôi 
                giúp bạn kết nối với hàng triệu người dùng!</p>
                <form id='form'>
                    <p>Nhập mã hãng bay</p>
                    <input type="text" name="MaHangBay" placeholder='Nhập mã hãng bay' onChange={changeMaHangBay}></input>
                    <p>Chọn tên hãng bay</p>
                    <input type="text" name="TenHangBay" placeholder='Nhập tên hãng bay' onChange={changeTenHangBay}></input>
                    <p>Tên đăng nhập</p>
                    <input type="text" name="user" placeholder='Nhập tên đăng nhập' onChange={changeTenDangNhap}></input>
                    <p>Mật khẩu</p>
                    <input type="password" name='pass' placeholder='Nhập mật khẩu' onChange={changeMatKhau}></input><br/>
                    <p>Nhập lại mật khẩu</p>
                    <input type="password" name="re-pass" placeholder='Nhập lại mật khẩu' ></input>
                    <p>Hình ảnh hãng bay</p>
                    <input type="text" name="logo" placeholder='Nhập tên đăng nhập'></input>
                    <p>Số hành lí xách tay cho phép:</p>
                    <input type="number" name="allow-weight" placeholder='Nhập số hành lí cho phép' onChange={changeHanhLi}></input>
                    <input type="submit" value="Đăng kí" name='submit' style={{"marginTop":"20px", "backgroundColor":"#FF5F1F",
                    "color":"white", "border":"none", "fontWeight":"bold","textAlign":"center"}} onClick={handleRegister}></input>
                    <p>Đã có tài khoản? <a class="register-link" href='' style={{"color":"blue"}}>Đăng nhập tại đây</a></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default PartnerSignup