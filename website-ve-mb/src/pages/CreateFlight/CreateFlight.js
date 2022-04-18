import React, {useState, useEffect} from 'react'
import './CreateFlight.css'
import {Add, Edit, Delete} from "@material-ui/icons"
import FlightModal from '../../components/FlightModal'
import EditFlightModal from '../../components/editFlightModal'
import axios from 'axios';
import Modal from 'react-modal';
import Fade from '@material-ui/core/Fade';

const CreateFlight = () => {
  const [openModal, setIsOpenModal] = useState(false);
  const [partnerName, setPartnerName] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [openEditModal, setIsOpenEditModal] = useState(false);
  const [show, setShow] = useState(false);
  const [flightId, setFlightId] = useState('');
  const handleClose = () => setShow(false);
  const [products, setProduct] = useState(null);
  const handleShowInfo = (flightId) =>{
    setShow(true);
    setFlightId(flightId);
  }

  const partnerJson = JSON.parse(localStorage.getItem("LOGIN_INFORMATION"));
  const url = `http://localhost:3001/api/partner/getPartnerFlights/${partnerJson.MaHangBay}`;
  useEffect(()=>{
      axios.get(url)
      .then(response => {
          setProduct(response.data);
      })
  }, [url])
  const HandleDeleteInfo = (flightId) =>{
        axios.delete(`http://localhost:3001/api/partner/getFlights/${flightId}`)
        .then(response => {
          window.location.reload();
        }).catch(err=> console.log(err))
    }
  return (
    <div className='flight-container'>
      <div className='head-component'>
        <div id='search-text'><b style={{"fontSize":"20px"}}>Tìm kiếm:</b> &nbsp; <input id='search-field'  type="text" placeholder='Nhập mã chuyến bay' style={{"borderRadius":"10px","paddingLeft":"15px"}}></input></div>
        <button id='btnCreate' href="#" onClick={() => {setIsOpenModal(true)}}><b><Add/>Thêm chuyến bay</b></button>
      </div>
      {openModal &&  <FlightModal closeModal={setIsOpenModal} />}
      <hr style={{"height":"1px", "backgroundColor":"#707070"}}></hr>
      <div style={{"fontSize":"18px"}}><h2><b>Danh sách chuyến bay của {partnerJson.TenHangBay}</b></h2></div>
      <table class="createfly">
        <tr>
          <th>Ngày thêm</th>
          <th>Thông tin chuyến bay</th>
          <th>Số ghế ngồi</th>
          <th>Giá tiền</th>
          <th>Hành động</th>
        </tr>
        <tbody>
          {products && (products.map(flights =>
               <tr id='info-column' key={flights.MaChuyenBay}>
                <td>11/3/2022</td>
                <td id='flight-info'>
                  <div>Số hiệu chuyến bay: {flights.SoHieuChuyenBay}</div>
                  <div>Mã chuyến bay: {flights.MaChuyenBay}</div>
                  <div>Giờ khởi hành: {flights.NgayGioKhoiHanh}</div>
                  <div>Giờ đến nơi: {flights.NgayGioDen}</div>
                  <div>Địa điểm khởi hành: {flights.DiaDiemKhoiHanh}</div>
                  <div>Địa điểm đến: {flights.DiaDiemDen}</div>
                  <div>Loại máy bay: {flights.LoaiMayBay}</div>
                  <div>Loại ghế ngồi: {flights.SoDoGheNgoi}</div>
                  <div>Khoảng cách ghế: {flights.KhoangCachGhe}</div>
                  <Modal isOpen={show} onRequestClose={handleClose}>
                      <EditFlightModal flightParams={flightId}/>
                  </Modal>
                </td>
                <td>{flights.TongSoVe}</td>
                <td>{flights.GiaVe} VNĐ</td>
                <td>
                  <div>
                    {/* //chuyển trạng thái show thành true */}
                    <button id='btnEdit' onClick={() => handleShowInfo(flights.MaChuyenBay)} key={flights.MaChuyenBay}><Edit/></button> 
                    <button id='btnDelete' onClick={() => HandleDeleteInfo(flights.MaChuyenBay)}><Delete/></button>
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