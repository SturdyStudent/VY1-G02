import React, {useState, useEffect} from 'react'
import {format} from 'date-fns';
import viLocale from 'date-fns/locale/vi'
import { axiosConfig } from '../../axiosConfig'
import axios from 'axios'
import SmallFlight from '../../assets/images/small_flight.png';
import Vietjet from '../../assets/images/vietjet.png';
import '../Booking_Detail/Booking_Detail.css'

function BookingRight() {
    let flightInfo = JSON.parse(localStorage.getItem("SUMMARY_INFO"));
    let searchInfo = JSON.parse(localStorage.getItem("SEARCH_INFO"));

    const [locations, setLocations] = useState(null);
    const [startLocation, setStartLocation] = useState("");
    const [endLocation, setEndLocation] = useState();
    const [partnerName, setPartnerName] = useState(null);
    const getPartnerUrl = `${axiosConfig.url}getPartners`;
    const locationUrl = `${axiosConfig.url}getLocations`;

    var gioDi = format(new Date(flightInfo.NgayGioKhoiHanh), 'yyyy/MM/dd hh:mm:ss');
    var gioDen = format(new Date(flightInfo.NgayGioDen), 'yyyy/MM/dd hh:mm:ss');

    var day1 = new Date(gioDi); 
    var day2 = new Date(gioDen);

    var difference= Math.abs(day2-day1);
    var round = Math.floor(difference/(3600000));
    var spare = (difference % 3600000)/60000;
    
    const formatSearchNgayDi = format(new Date(flightInfo.NgayGioKhoiHanh), "iii, dd 'Thg' MM yyyy",{
        locale: viLocale
    });
    useEffect(()=>{
        axios.get(locationUrl)
        .then(response => {
            setLocations(response.data);
            let valStart = response.data.filter(location => location.MaDiaDiem === flightInfo.DiaDiemKhoiHanh);
            let valEnd = response.data.filter(location => location.MaDiaDiem === flightInfo.DiaDiemDen);
            setStartLocation(valStart[0].TenDiaDiem);
            setEndLocation(valEnd[0].TenDiaDiem);
        })
    }, [locationUrl])
    useEffect(()=>{
        axios.get(getPartnerUrl)
        .then(response => {
            let valPartner = response.data.filter(partner => partner.MaHangBay === flightInfo.HangBay);
            setPartnerName(valPartner[0].TenHangBay);
        })
    }, [getPartnerUrl])
  return (
    <div class="flightsimple">
        <form>
            <table class="bookinfo">
                <tr>
                    <th colSpan={2}>
                        <img src={SmallFlight} width="40px" height="40px"/>
                        <span>{startLocation.split(",")[0]} → {endLocation.split(",")[0]}</span>
                    </th>
                    <th>
                        <div>Chi&nbsp;tiết</div>
                    </th>
                    <th></th>
                </tr>
                <tr><td colSpan={3}>
                        <span>Chuyến bay đi • Tue, 26 Apr 2022</span>
                </td></tr>
                <tr>
                    <td colSpan={3}>
                        <img src={Vietjet} width="80px" height="40px" style={{"float": "left"}}/>
                        <span>
                            {}<br/>
                            <div class="seatclassnote">{searchInfo.HangGhe}</div>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                    {format(new Date(flightInfo.NgayGioKhoiHanh),'HH:mm')}<br/>
                        {flightInfo.DiaDiemKhoiHanh}
                    </td>
                    <td>
                        1h30m<br/>
                        Bay thẳng
                    </td>
                    <td>
                    {format(new Date(flightInfo.NgayGioDen),'HH:mm')}<br/>
                        {flightInfo.DiaDiemDen}
                    </td>
                </tr>
                <tr><td colSpan={3}><div class="flightnote">
                    <span>Không hoàn tiền</span><br/>
                    <span>Có áp dụng đổi lịch bay</span>
                </div></td></tr>
            </table>
        </form>
    </div> 
  )
}

export default BookingRight