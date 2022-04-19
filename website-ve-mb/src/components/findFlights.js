import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Land from '../assets/images/land_icon.png';
import SearchIcon from '../assets/images/search_icon.png'
import './findFlights.css';

function FindFlights() {
    const [redirect, setRedirect] = useState(false);
    const [soHanhKhach, setSoHanhKhach] = useState();
    const handleSoHanhKhach = e => setSoHanhKhach(e.target.value);

    if(redirect){
        localStorage.setItem("SEARCH_INFO", soHanhKhach);
        return <Navigate to={"/search-result"} replace/>
    }
    const handleRedirect = (e) => {
      setRedirect(e)
    }
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
                                    <select id="findwayfrom" name="findfromto" class="findwayfrom">
                                        <option value="DaNang"><img src={Land} />Đà Nẵng (DAD)</option>
                                        <option value="TPHCM">TP HCM (SGN)</option>
                                        <option value="HaNoi">Hà Nội (HAN)</option>
                                        <option value="DaLat">Đà Lạt (DLI)</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="findwayto">Đến</label><br />
                                    <select id="findwayto" name="findfromto" class="findwayto">
                                        <option value="TPHCM">TP HCM (SGN)</option>
                                        <option value="DaNang">Đà Nẵng (DAD)</option>
                                        <option value="HaNoi">Hà Nội (HAN)</option>
                                        <option value="DaLat">Đà Lạt (DLI)</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <label for="customerno">Số hành khách</label><br />
                                <input type="number" id="customerno" name="findcustomer" min="1" class="customerno" style={{"padding":"5px"}} value={soHanhKhach} onChange={handleSoHanhKhach}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="finddate-holder">
                                    <div> 
                                        <label for="finddatefrom">Ngày đi</label><br />
                                        <input type="date" id="finddatefrom" name="finddate" />
                                    </div>
                                    <div>
                                        <input type="checkbox" id="finddateto" name="returndate" />
                                        <label for="finddateto">Khứ hồi</label><br />
                                        <input type="date" id="finddateto" name="finddate" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <label for="seatclass">Hạng ghế</label><br />
                                <select id="seatclass" name="seatclass" class="seatclass">
                                    <option value="economy">Phổ thông</option>
                                    <option value="preconomy">Phổ thông đặc biệt</option>
                                    <option value="business">Thương gia</option>
                                    <option value="fstclass">Hạng nhất</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <div class="line-button"><button onClick={() => setRedirect(true)} class="btnFindticket"><img src={SearchIcon} /><b>Tìm chuyến bay</b></button></div>
                </form>
            </div>
        </div>
  )
}

export default FindFlights