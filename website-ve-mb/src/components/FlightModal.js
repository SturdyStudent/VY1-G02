import React from 'react'
import './FlightModal.css'

function FlightModal({closeModal}) {
  return (
    <div class="modal-background">
      <div class='modal-container'>
        <div id='title' >Thêm chuyến bay</div>
        <table class="table">
          <tr class="tr">
            <td class="td">
              <div>Số hiệu chuyến bay:</div>
              <input type="text"></input>
            </td>
            <td class="td">
              <div>Mã chuyến bay:</div>
              <input type="text"></input>
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Ngày/giờ khởi hành:</div>
              <input type="text"></input>
            </td>
            <td class="td">
              <div>Ngày/giờ đến nơi:</div>
              <input type="text"></input>
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Địa điểm khởi hành:</div>
              <input type="text"></input>
            </td>
            <td class="td">
              <div>Địa điểm đến:</div>
              <input type="text"></input>
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Giá vé:</div>
              <input type="text"></input>
            </td>
            <td class="td">
              <div>Loại máy bay:</div>
              <input type="text"></input>
            </td>
          </tr>
          <tr class="tr">
            <td class="td">
              <div>Sơ đồ ghế ngồi:</div>
              <input type="text"></input>
            </td>
            <td class="td">
              <div>Khoảng cách ghế:</div>
              <input type="text"></input>
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