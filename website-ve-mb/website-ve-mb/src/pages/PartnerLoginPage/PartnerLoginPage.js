import React,{useState} from 'react'
import Logo from '../../assets/images/traveloka_pic.png';
import { Navigate } from 'react-router-dom';
import Header from '../../components/header'
import axios from 'axios';
import './PartnerLoginPage.css'
import { axiosConfig } from '../../axiosConfig';

function PartnerLoginPage() {
  const loginUrl = `${axiosConfig.url}partner-login`;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);
  if(redirect){
    return <Navigate to={"/partner"} replace/>
  }
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  if(redirect){
    return <Navigate to={"/partner"} replace/>
  }

  const handleLogin = (e) =>{
    axios.post(loginUrl, {
      username: username,
      password: password
    }).then((res)=>{
      localStorage.setItem('LOGIN_INFORMATION', JSON.stringify(res.data));
      if(res.data.toString().length > 0) {
          setRedirect(true);
      }
    })

    e.preventDefault();
  }
  return (
    <div class="bg" className='partner-login' style={{"backgroundColor":"black"}}>
        <div style={{"background":"white", "paddingBottom":"10px"}}><Header></Header></div>
        <div id='white-container'>
            <div><img src={Logo} height="40px" style={{"position":"absolute","right":"48%", "transform":"translate(50%, 50%)"}}></img></div>
            <div id='inner-container'>
                <div><h3 style={{ "fontSize":"20px"}}>Chào mừng đã quay lại!</h3></div>
                <p style={{"color":"#454545"}}>Đăng nhập để quản lí những những chuyến bay của bạn từ việc kiểm
                                                 tra lợi nhuận cho đến quản lí chuyển bay</p>
                <form id='form'>
                    <p>Tên đăng nhập</p>
                    <input type="text" name="user" placeholder='Nhập tên đăng nhập' value={username} style={{"height":"40px"}} onChange={onChangeUsername}></input>
                    <p>Mật khẩu</p>
                    <input type="password" name='pass' placeholder='Nhập mật khẩu' value={password} style={{"height":"40px"}} onChange={onChangePassword}></input><br/>
                    <input type="submit" value="Đăng nhập" name='submit' style={{"marginTop":"20px", "backgroundColor":"#FF5F1F",
                     "color":"white", "border":"none", "fontWeight":"bold","textAlign":"center"}} onClick={handleLogin}></input>
                </form>
                <p>Chưa có mật khẩu? <a class="register-link" href='' style={{"color":"blue"}}>Đăng kí ngay!</a></p>
            </div>
       </div>
    </div>
  )
}

export default PartnerLoginPage