import React, {useState} from 'react'
import './CreateFlight.css'
import {Add, Edit, Delete} from "@material-ui/icons"
import FlightModal from '../../components/FlightModal'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade';

const CreateFlight = () => {
  const [openModal, setIsOpenModal] = useState(false);

  return (
    <div className='flight-container'>
      <div className='head-component'>
        <div id='search-text'><b style={{"fontSize":"20px"}}>Tìm kiếm:</b> &nbsp; <input id='search-field'  type="text" placeholder='Nhập mã chuyến bay' style={{"borderRadius":"10px","paddingLeft":"15px"}}></input></div>
        <button id='btnCreate' href="#" onClick={() => {setIsOpenModal(true)}}><b><Add/>Thêm chuyến bay</b></button>
      </div>
      {openModal &&  <FlightModal closeModal={setIsOpenModal}/>}
      <hr style={{"height":"1px", "backgroundColor":"#707070"}}></hr>
      <div style={{"fontSize":"18px"}}><h2><b>Danh sách chuyến bay</b></h2></div>
      <table>
        <tr>
          <th>Ngày thêm</th>
          <th>Thông tin chuyến bay</th>
          <th>Số ghế ngồi</th>
          <th>Giá tiền</th>
          <th>Hành động</th>
        </tr>
        <tr id='info-column'>
          <td>11/3/2022</td>
          <td id='flight-info'>
            <div>Số hiệu chuyến bay:</div>
            <div>Mã chuyến bay:</div>
            <div>Giờ khởi hành:</div>
            <div>Giờ đến nơi:</div>
            <div>Địa điểm khởi hành:</div>
            <div>Địa điểm đến:</div>
            <div>Gía vé:</div>
            <div>Loại máy bay:</div>
            <div>Loại ghế ngồi:</div>
            <div>Khoảng cách ghế:</div>
          </td>
          <td>100</td>
          <td>500.000 VNĐ</td>
          <td>
            <div>
              <button><Edit/></button>
              <button><Delete/></button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default CreateFlight