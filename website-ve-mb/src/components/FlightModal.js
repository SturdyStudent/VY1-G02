import React, {useState, useEffect} from 'react'
import './FlightModal.css'
import axios from 'axios';

function FlightModal({closeModal}) {
  const url = "http://localhost:3001/api/locations";
    const [locations, setLocations] = useState(null);

    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setLocations(response.data);
        })
    }, [url])
  return (
    <div class="modal-background">
      <div class='modal-container'>
        <div id='title'>Thêm chuyến bay</div>
        <table class="table">
          <tr class="tr">
            <td class="td">
              <div>Số hiệu chuyến bay:</div>
              <input type="text" maxLength={10}></input>
            </td>
            <td class="td">
              <div>Mã chuyến bay:</div>
              <input type="text" maxLength={10}></input>
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Ngày/giờ khởi hành:</div>
              <input type="datetime-local"></input>
            </td>
            <td class="td">
              <div>Ngày/giờ đến nơi:</div>
              <input type="datetime-local"></input>
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Địa điểm khởi hành:</div>
                <select style={{"width":"200px", "height":"30px"}}>
                  {locations &&  (locations.map(location =>
                    <option value={location.MaDiaDiem}>{location.TenDiaDiem}</option>
                  ))}
                </select> 
            </td>
            <td class="td">
              <div>Địa điểm đến:</div>
              <select style={{"width":"200px", "height":"30px"}}>
                  {locations &&  (locations.map(location =>
                    <option value={location.MaDiaDiem}>{location.TenDiaDiem}</option>
                  ))}
                </select> 
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Giá vé:</div>
              <input type="number"></input>
            </td>
            <td class="td">
              <div>Loại máy bay:</div>
              <input type="text"></input>
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Sơ đồ ghế ngồi:</div>
              <input type="text" maxLength={10}></input>
            </td>
            <td class="td">
              <div>Khoảng cách ghế:</div>
              <input type="number"></input>
            </td>
          </tr>
        </table>
        <div class="button-modal">
          <button>LƯU</button>
          <button class="cancel" onClick={() => closeModal(false)}>HỦY</button>
        </div>
      </div>
    </div>
  )
}

export default FlightModal