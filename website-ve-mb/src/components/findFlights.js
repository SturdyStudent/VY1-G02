import { FlightLand, FlightTakeoff, Group, AirlineSeatReclineNormal } from '@material-ui/icons';
import React, {useState,useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { axiosConfig } from '../axiosConfig';
import Minus from '../assets/images/minus.png'
import Add from '../assets/images/add.png'
import Partnership from '../assets/images/partner_pic.jpg'
import Adult from '../assets/images/adult.png'
import Child from '../assets/images/child.png'
import Baby from '../assets/images/baby.png'
import SearchIcon from '../assets/images/search_icon.png'
import './findFlights.css';

function FindFlights() {
    const url = `${axiosConfig.url}getLocations`;

    var curr = new Date();
    var date = curr.toISOString().slice(0, 10);

    const [locations, setLocations] = useState();
    const [khoiHanh, setKhoiHanh] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [DiaDiemDi, setDiaDiemDi] = useState("Đà Nẵng (DAD)");
    const [DiaDiemDen, setDiaDiemDen] = useState("Đà Nẵng (DAD)");
    const [NgayDi, setNgayDi] = useState(date);
    const [KhuHoi, setKhuHoi] = useState();
    const [HangGhe, setHangGhe] = useState("Phổ thông");
    const [modal, setModal] = useState(false);
    const [adultQuantity, setAdultQuantity] = useState(1);
    const [childQuantity, setChildQuantity] = useState(0);
    const [babyQuantity, setBabyQuantity] = useState(0);

    const SEARCH_INFO = {
        DiaDiemDi: DiaDiemDi,
        DiaDiemDen: DiaDiemDen,
        NguoiLon: adultQuantity,
        TreEm: childQuantity,
        EmBe: babyQuantity,
        NgayDi: NgayDi,
        KhuHoi: KhuHoi,
        HangGhe: HangGhe 
    }

    const addAdultQuantity = () => setAdultQuantity(adultQuantity + 1);
    const minusAdultQuantity = () => {
        if(adultQuantity > 1){
            setAdultQuantity(adultQuantity - 1);
        }
    }
    const addChildQuantity = () => setChildQuantity(childQuantity + 1);
    const minusChildQuantity = () => {
        if(childQuantity > 0){
            setChildQuantity(childQuantity - 1);
        }
    }
    const addBabyQuantity = () => setBabyQuantity(babyQuantity + 1);
    const minusBabyQuantity = () => {
        if(babyQuantity > 0){
            setBabyQuantity(babyQuantity - 1);
        }
    }

    const toggleModal = () =>{
        setModal(!modal);
    }
    const handleOnChange = () => {
        setKhoiHanh(!khoiHanh);
    }

    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setLocations(response.data);
        })
    }, [url]);

    if(redirect){
        localStorage.setItem("SEARCH_INFO", JSON.stringify(SEARCH_INFO));
        return <Navigate to={"/search-result"} replace/>
    };

    return (
        <div>
            <div class="findticket">
                <form class="findticket-form">
                    <table>
                        <tr class="findway">
                            <td>
                                <input type="radio" id="findone" name="findways" value="MOTCHIEU" checked />
                                <label for="findone" >Một chiều / Khứ hồi</label>
                                <input type="radio" id="findmany" name="findways" value="NHIEUCHIEU" />
                                <label for="findmany">Nhiều thành phố</label>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr class="findway-host">
                            <td class="findway-holder">
                                <div>
                                    <label for="findwayfrom">Từ</label><br />
                                    <span class="find-icon"><FlightTakeoff/></span>
                                    <select id="findwayfrom" name="findfromto" class="findwayfrom" onChange={(e) => {setDiaDiemDi(e.target.value)}}>
                                    {locations &&  (locations.map(function(location) {
                                        var rawCityName = location.TenDiaDiem;
                                        var cityNames = rawCityName.split(",");
                                        return(
                                        <option value={`${cityNames[0]} (${location.MaDiaDiem})`}>{cityNames[0]} ({location.MaDiaDiem})</option>
                                            )})
                                        )}
                                    </select>
                                </div>
                
                                <div>
                                    <label for="findwayto">Đến</label><br />
                                    <span class="find-icon"><FlightLand/></span>
                                    <select id="findwayto" name="findfromto" class="findwayto" onChange={(e) => {setDiaDiemDen(e.target.value)}}>
                                    {locations &&  (locations.map(function(location) {
                                        var rawCityName = location.TenDiaDiem;
                                        var cityNames = rawCityName.split(",");
                                        return(
                                        <option value={`${cityNames[0]} (${location.MaDiaDiem})`}>{cityNames[0]} ({location.MaDiaDiem})</option>
                                            )})
                                        )}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <label for="customerno">Số hành khách</label><br />
                                <span class="find-icon" style={{"paddingTop":"5px"}}><Group/></span>
                                <div id="customerno" name="findcustomer" min="1" class="customerno" onClick={toggleModal}>
                                    {adultQuantity} Người lớn, {childQuantity} Trẻ em, {babyQuantity} Em bé
                                </div>
                                
                                {modal && (
                                    <div className='customer-quantity-modal'>
                                        <div>
                                            <img src={Adult} width="25px" className='quantity-item'/>
                                            <span className='quantity-item' style={{"marginTop":"0px"}}>
                                                <div>Người lớn</div>
                                                <div>(từ 12 tuổi)</div>
                                            </span>
                                            <div className='quantity-item'>
                                                    <span><button className='btnAdjustQuantity' type='button' onClick={() => minusAdultQuantity()}><img src={Minus} width="15px" /></button></span>
                                                    <span style={{"width":"30px","textAlign":"center"}}>{adultQuantity}</span>
                                                    <span><button className='btnAdjustQuantity' type='button' onClick={() => addAdultQuantity()}><img src={Add} width="15px" /></button></span>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Child} width="20px" className='quantity-item'/>
                                            <span className='quantity-item'>
                                                <div>Trẻ em</div>
                                                <div>(từ 2-12 tuổi)</div>
                                            </span>
                                            <div className='quantity-item'>
                                                <span><button className='btnAdjustQuantity' type='button' onClick={() => minusChildQuantity()}><img src={Minus} width="15px" /></button></span>
                                                <span style={{"width":"30px","textAlign":"center"}}>{childQuantity}</span>
                                                <span><button className='btnAdjustQuantity' type='button' onClick={() => addChildQuantity()}><img src={Add} width="15px" /></button></span>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Baby} width="20px" className='quantity-item'/>
                                            <span className='quantity-item'>
                                                <div>Em bé</div>
                                                <div>(dưới 2 tuổi)</div>
                                            </span>
                                            <div className='quantity-item'>
                                                <span><button className='btnAdjustQuantity' type='button' onClick={() => minusBabyQuantity()}><img src={Minus} width="15px" /></button></span>
                                                <span style={{"width":"30px","textAlign":"center"}}>{babyQuantity}</span>
                                                <span><button className='btnAdjustQuantity' type='button' onClick={() => addBabyQuantity()}><img src={Add} width="15px" /></button></span>
                                            </div>
                                        </div>
                                        <div className='btnDoneQuantity'>
                                            <span onClick={() => toggleModal(false)}><b>Xong</b></span>
                                        </div>
                                    </div>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="finddate-holder">
                                    <div> 
                                        <label for="finddatefrom">Ngày đi</label><br />
                                        <input type="date" id="finddatefrom" name="finddate" value={NgayDi} onChange={(e) => {setNgayDi(e.target.value)}}/>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="finddateto" name="returndate" />
                                        <label for="finddateto">Khứ hồi</label><br />
                                        <input type="date" id="finddateto" name="finddate" onChange={(e) => {setKhuHoi(e.target.value)}}/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <label for="seatclass">Hạng ghế</label><br />
                                <span class="find-icon"><AirlineSeatReclineNormal style={{"zIndex":"0"}}/></span>
                                <select id="seatclass" name="seatclass" class="seatclass" onChange={(e) => {setHangGhe(e.target.value)}}>
                                    <option value="Phổ thông">Phổ thông</option>
                                    <option value="Phổ thông đặc biệt">Phổ thông đặc biệt</option>
                                    <option value="Thương gia">Thương gia</option>
                                    <option value="Hạng nhất">Hạng nhất</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <div class="line-button"><button onClick={() => setRedirect(true)} class="btnFindticket"><img src={SearchIcon} /><b>Tìm chuyến bay</b></button></div>
                </form>
            </div>
            <div style={{"display":"flex","justifyContent":"center","marginTop":"100px"}}>
                <img src={Partnership} width="62%"/>
            </div>
        </div>
  )
}

export default FindFlights