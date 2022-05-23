import React, {useState,useEffect} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import '../../components/header.css';
import './User.css';

function User() {

    //login form
    const [modal, setModal] = useState(false);
    const toggleLogin = () =>{
        setModal(!modal);
    }

    //password eyes
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    return (
    <div class="loguser">
        <div class="loginarrow" onClick={toggleLogin}>
            Đăng Nhập <KeyboardArrowDownIcon style={{ position: 'absolute', top: '14px' }} size="50px" color="white"/>
        </div>
        {modal && (
            <div class="loginform">
                <div class="logintext">Đăng nhập tài khoản</div>
                <div class="logintk">
                    Email hoặc số di động<br/>
                    <input type="text" class="nhapTK"/>
                </div>
                <div class="loginmk">
                    Mật khẩu &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <a href="#">Quên mật khẩu</a><br/>
                    <Input className="nhapMK" type={values.showPassword ? "text" : "password"} disableUnderline={true} 
                            onChange={handlePasswordChange("password")} value={values.password}
                            endAdornment={
                                <IconButton color={'primary'}
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                    {values.showPassword ? <VisibilityOff/> : <Visibility />}
                                </IconButton>
                            }
                    />
                </div>
                <table class="loginbottom">
                    <tr>
                        <td>
                            <button class="loginbttn">Đăng nhập</button>
                        </td>
                        <td>
                            Bạn chưa có tài khoản?
                            <a href="#">Đăng ký</a>
                        </td>
                    </tr>
                </table>
            </div>
        )}
        <button class="signinbttn">Đăng ký</button>
    </div>
  )
}

export default User