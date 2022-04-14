import React, {useState, useEffect} from 'react'
import './CreateFlight.css'
import {Add, Edit, Delete} from "@material-ui/icons"
import FlightModal from '../../components/FlightModal'
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const CreateFlight = () => {
  const [openModal, setIsOpenModal] = useState(false);
  const url = "http://localhost:3001/api/partner/getFlights";
    const [products, setProduct] = useState(null);

    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setProduct(response.data);
        })
    }, [url])
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
        <tbody>
          {products && (products.map(flights =>
               <tr id='info-column'>
                <td>11/3/2022</td>
                <td id='flight-info'>
                  <div>Số hiệu chuyến bay: {flights.SoHieuChuyenBay}</div>
                  <div>Mã chuyến bay: {flights.MaChuyenBay}</div>
                  <div>Giờ khởi hành: {flights.NgayGioKhoiHanh}</div>
                  <div>Giờ đến nơi: {flights.NgayGioDenNoi}</div>
                  <div>Địa điểm khởi hành: {flights.DiaDiemKhoiHanh}</div>
                  <div>Địa điểm đến: {flights.DiaDiemDen}</div>
                  <div>Loại máy bay: {flights.LoaiMayBay}</div>
                  <div>Loại ghế ngồi: {flights.SoDoGheNgoi}</div>
                  <div>Khoảng cách ghế: {flights.KhoangCachGhe}</div>
                </td>
                <td>{flights.TongSoVe}</td>
                <td>{flights.GiaVe} VNĐ</td>
                <td>
                  <div>
                    <button><Edit/></button>
                    <button><Delete/></button>
                  </div>
                </td>
             </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CreateFlight