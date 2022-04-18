import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './FlightSearchingPage.css'

function FlightSearchingPage() {

    return (
        <div>
        <Header></Header>
        <div class="findticket" align="center">
            <form>
                <table>
                    <tr class="findway">
                        <td>
                            <input type="radio" id="findone" name="findways" value="MOTCHIEU" checked />
                            <label for="findone">Một chiều / Khứ hồi</label>
                        </td>
                        <td>
                            <input type="radio" id="findmany" name="findways" value="NHIEUCHIEU" />
                            <label for="findmany">Nhiều thành phố</label>
                        </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="findwayfrom">Từ</label><br />
                            <select id="findwayfrom" name="findfromto">
                                <option value="DaNang">Đà Nẵng (DAD)</option>
                                <option value="TPHCM">TP HCM (SGN)</option>
                                <option value="HaNoi">Hà Nội (HAN)</option>
                                <option value="DaLat">Đà Lạt (DLI)</option>
                            </select>
                        </td>
                        <td>
                            <label for="findwayto">Đến</label><br />
                            <select id="findwayto" name="findfromto">
                                <option value="TPHCM">TP HCM (SGN)</option>
                                <option value="DaNang">Đà Nẵng (DAD)</option>
                                <option value="HaNoi">Hà Nội (HAN)</option>
                                <option value="DaLat">Đà Lạt (DLI)</option>
                            </select>
                        </td>
                        <td>
                            <label for="customerno">Số hành khách</label><br />
                            <input type="number" id="customerno" name="findcustomer" min="1" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="finddatefrom">Ngày đi</label><br />
                            <input type="date" id="finddatefrom" name="finddate" />
                        </td>
                        <td>
                            <input type="checkbox" id="finddateto" name="returndate" />
                            <label for="finddateto">Khứ hồi</label><br />
                            <input type="date" id="finddateto" name="finddate" />
                        </td>
                        <td>
                            <label for="seatclass">Hạng ghế</label><br />
                            <select id="seatclass" name="seatclass">
                                <option value="economy">Phổ thông</option>
                                <option value="preconomy">Phổ thông đặc biệt</option>
                                <option value="business">Thương gia</option>
                                <option value="fstclass">Hạng nhất</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default FlightSearchingPage