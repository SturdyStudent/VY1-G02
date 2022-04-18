import React from 'react'
import Header from '../../components/header'
import East from '../../assets/images/right_arrow.png';
import SearchIcon from '../../assets/images/search_icon.png'
import Vietjet from '../../assets/images/vietjet.png'
import './FlightSearchResult.css';

function FlightSearchResult() {
  return (
    <div>
        <Header/>
        <div class="search-header">
            <div class="center-search">
                <div class="search-header-info">
                    <div class="search-location"><b>{localStorage.getItem("SEARCH_INFO")} <img src={East}/> Đà Nẵng (DAD)</b></div>
                    <div>T2, 18 Thg 04 2022  |  1 passengers  |  Phổ thông</div>
                </div>
                <div class="search-header-change">
                    <div>
                        <button><b><img src={SearchIcon} width="18px"/> Đổi tìm kiếm</b></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-result">
            <div class="search-result-item">
                <div>
                    <div class="search-result-partner"><img src={Vietjet} width="80px"/> VietJet Air</div>
                    <div class="search-result-route">
                        <table>
                            <tr>
                                <td>21:20</td>
                                <td rowSpan={2}>
                                    <div>1h 20m</div>
                                    <div>Bay thẳng</div>
                                </td>
                                <td>22:30</td>
                            </tr>
                            <tr>
                                <td>HAN</td>
                     
                                <td>DAD</td>
                            </tr>
                        </table>
                    </div>
                    <div class="search-result-cost">
                        <div>1.043.720  VND/khách</div>
                        <div><button class="btnPickFlight">Chọn</button></div>
                    </div>
                </div>
                <div>
                    <div class="btn-flight-detail">Chi tiết chuyến bay</div>
                    <div class="btn-ticket-detail">Chi tiết vé</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightSearchResult