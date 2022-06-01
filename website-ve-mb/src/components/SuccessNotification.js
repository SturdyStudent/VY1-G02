import React, {useState} from 'react'
import './SuccessNotification.css'
import { Navigate } from 'react-router-dom';
import SuccessPayment from '../assets/images/successPayment.jpg'

export default function SuccessNotification() {
    const [redirect, setRedirect] = useState(false);
    function handleRedirect(e){
        e.preventDefault();
        setRedirect(true);
    }
    if(redirect){
        return <Navigate to={"/"} replace/>
    }
  return (
    <div className='container-out-notification'>
        <div className='container-notification'>
            <img src={SuccessPayment} width="470px" height="200px" style={{"border":"none"}} />
            <div>
                <button className='back-notification-btn' onClick={(e) => handleRedirect(e)}>Quay về trang chủ</button>
            </div>
        </div>
    </div>
  )
}
