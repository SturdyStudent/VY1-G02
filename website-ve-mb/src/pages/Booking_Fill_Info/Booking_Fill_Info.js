import React, {useState,useEffect} from 'react';
import { Navigate, Link } from 'react-router-dom';
import '../Booking_Detail/Booking_Detail.css'
import Header from '../../components/header'
import BookingRight from '../Booking_Right_FlightShort/Booking_Right'

function Booking_Fill_Info() {
    let flightInfo = JSON.parse(localStorage.getItem("SUMMARY_INFO"));
    let searchInfo = JSON.parse(localStorage.getItem("SEARCH_INFO"));

    const [redirect, setRedirect] = useState(false);
    
    if(redirect){
        return <Navigate to={"/booking-detail"} replace/>
   }
   function addItems(e){
        const forms = document.querySelectorAll("form");
        const output = [];
        e.preventDefault();
        forms.forEach(form => {
            output.push({
                inputData: Object.fromEntries(new FormData(form)),
            });
        });
        localStorage.setItem("CLIENT_INFO", JSON.stringify(output));
        setRedirect(true);
        console.log("data", JSON.stringify(output));}
   
  return (
    <div>
    <Header/>
        <div class="booking">
            <div class="personinfo">
                <h1>Đặt chỗ của tôi</h1>
                <p>Điền thông tin và xem lại đặt chỗ.</p>
            
                <h2>Thông tin liên hệ</h2>
                <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitlelong">
                                <div>Thông tin liên hệ (nhận vé/phiếu thanh toán)</div>
                            </th>
                            <th class="bookfix">
                                <button class="bookfixbttn" id='button'>Lưu</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <br/><label for="holh">Họ (vd: Nguyen)</label><br/>
                                <input type="text" id="holh" name="holh"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                            <td>
                                <br/><label for="tenlh">Tên Đệm & Tên (vd: Thi An)</label><br/>
                                <input type="text" id="tenlh" name="tenlh"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="dtlh">Điện thoại di động</label><br/>
                                <input type="text" id="tenlh" name="dtlh"/><br/>
                                <p class="note">vd: +84 901234567 trong đó +84 là
                                    <br/> mã quốc gia và 901234567 là số di động</p>
                            </td>
                            <td>
                                <label for="maillh">Email</label><br/>
                                <input type="text" id="maillh" name="maillh"/><br/>
                                <p class="note">abc123@email.com</p>
                            </td>
                        </tr>
                    </table>
                </form>
                <h2>Thông tin hành khách</h2>
                {[...Array(searchInfo.NguoiLon)].map((elementInArray, Index) => {
                    return  <form >
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Người lớn {Index + 1}</th>
                            <th class="bookfix">
                                <button class="bookfixbttn" id='button'>Lưu</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <br/><label for="xungnhat">Danh xưng</label>
                                <select id="xungnhat" name="xung">
                                    <option value="null"></option>
                                    <option value="Ông"> Ông </option>
                                    <option value="Bà"> Bà </option>
                                    <option value="Bé"> Bé </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br/><label for="honhat">Họ (vd: Nguyen)</label><br/>
                                <input type="text" id="honhat" name="ho"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                            <td>
                                <br/><label for="tennhat">Tên Đệm & Tên (vd: Thi An)</label><br/>
                                <input type="text" id="tennhat" name="ten"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label for="sinhnhat">Ngày sinh</label><br/>
                                <input type="date" id="sinhnhat" name="sinh"/><br/>
                                <p class="note">hành khách người lớn (trên 12 tuổi)</p>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </table>
                </form>
                })}
                          {[...Array(searchInfo.TreEm)].map((elementInArray, Index) => {
                return <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Trẻ em {Index + 1}</th>
                            <th class="bookfix">
                                <button class="bookfixbttn" id='button'>Lưu</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <br/><label for="xungnhat">Danh xưng</label>
                                <select id="xungnhat" name="xung">
                                    <option value="null"></option>
                                    <option value="Ông"> Ông </option>
                                    <option value="Bà"> Bà </option>
                                    <option value="Bé"> Bé </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br/><label for="honhat">Họ (vd: Nguyen)</label><br/>
                                <input type="text" id="honhat" name="ho"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                            <td>
                                <br/><label for="tennhat">Tên Đệm & Tên (vd: Thi An)</label><br/>
                                <input type="text" id="tennhat" name="ten"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label for="sinhnhat">Ngày sinh</label><br/>
                                <input type="date" id="sinhnhat" name="sinh"/><br/>
                                <p class="date">hành khách trẻ em (trên 2 tuổi)</p>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </table>
                </form>})}
                {[...Array(searchInfo.EmBe)].map((elementInArray, Index) => {
                 return <form>
                    <table class="bookinfo">
                        <tr>
                            <th class="booktitle">Em bé {Index + 1}</th>
                            <th class="bookfix">
                                <button class="bookfixbttn" id='button'>Lưu</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <br/><label for="xungnhat">Danh xưng</label>
                                <select id="xungnhat" name="xung">
                                    <option value="null"></option>
                                    <option value="Ông"> Ông </option>
                                    <option value="Bà"> Bà </option>
                                    <option value="Bé"> Bé </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br/><label for="honhat">Họ (vd: Nguyen)</label><br/>
                                <input type="text" id="honhat" name="ho"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                            <td>
                                <br/><label for="tennhat">Tên Đệm & Tên (vd: Thi An)</label><br/>
                                <input type="text" id="tennhat" name="ten"/><br/>
                                <p class="note">như trên CMND (không dấu)</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label for="sinhnhat">Ngày sinh</label><br/>
                                <input type="date" id="sinhnhat" name="sinh"/><br/>
                                <p class="note">hành khách em bé (dưới 3 tuổi)</p>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </table>
                </form>})}
                <br/><br/>
                <div class="bookconfirm">
                    <a href="#" onClick={(e) => addItems(e)}>Tiếp tục</a>
                </div>
            </div>
        <BookingRight/>
        </div>
    </div>
  )}
export default Booking_Fill_Info