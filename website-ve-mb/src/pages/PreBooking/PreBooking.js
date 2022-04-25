import React, {useState} from 'react'
import Header from '../../components/header'
import SmallFlight from '../../assets/images/small_flight.png'
import MockRightArrow from '../../assets/images/mock_right_arrow.png'
import Vietjet from '../../assets/images/vietjet.png'
import Detail from '../../assets/images/detail.png'
import Line from '../../assets/images/line.png'
import { Navigate } from 'react-router'
import Checked from '../../assets/images/checked.png'
import './PreBooking.css'

function PreBooking() {
    const [redirect, setRedirect] = useState(false);
    if(redirect){
        localStorage.setItem("TRANSFER_INFO", "nothing");
        return <Navigate to={"/booking-fill"} replace/>
    }

  return (
    <div style={{"height":"700px"}}>
        <Header/>
        <div className='prebooking-background-blue'></div>
        <div className='prebooking-container'>
            <div className='prebooking-header-card'>
                <div>
                    <h4><b>Chuyến bay từ Hà Nội tới Đà Nẵng</b></h4>
                    <div className='prebooking-header-card-sub'>
                        <div><span><img src={SmallFlight} width="30px"/></span></div>
                        <div>
                            <div>Hà Nội (HAN) → Đà Nẵng (DAD)    |    22 Thg 04 2022</div><br/>
                            <div>1 người lớn &nbsp;&nbsp; | &nbsp;&nbsp; Economy</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='prebooking-sub-container'>
                <div className='prebooking-info'>
                    <div><img src={SmallFlight} width="50px" />Hà Nội (HAN) <span><img src={MockRightArrow} width="40px" /></span> Đà Nẵng (DAD)</div>
                    <div>Thông tin chuyến bay</div>
                    <hr/>
                    <div className='prebooking-info-date'>Sun, 24 Apr 2022</div>
                    <div className='prebooking-info-container'>
                        <table>
                            <tr className='prebooking-info-container-first-row'>
                                <td rowSpan={2}><img src={Vietjet} width="70px" /></td>
                                <td className='prebooking-discount'>
                                    <div>VietJet Air</div><br></br>
                                    <div style={{"color":"#999ca0"}}>Khuyến mãi</div>
                                </td>
                                <td>
                                    <table className='prebooking-info-container-container'>
                                        <tr>
                                            <td>21:10</td>
                                            <td rowSpan={2}>
                                                <div style={{"color":"#68717c","fontSize":"small"}}>1h 20m</div><br/>
                                                <img src={Line} width="150px " ></img><br/>
                                                <div style={{"color":"#68717c","fontSize":"small", "fontWeight":"bold"}}>Bay thẳng</div>
                                            </td>
                                            <td>22:30</td>
                                        </tr>
                                        <tr className='prebooking-info-container-bold'>
                                            <td>HAN</td>
                                            <td>DAD</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
               
                <div className='prebooking-right-column'>
                    <div className='prebooking-supplement-info'>
                        <div className='prebooking-header-supplement-info'>
                            <div><span><img src={Detail} width="40px" /></span>Thông tin bổ sung</div>
                            <div style={{"width":"50px","fontSize":"medium","fontWeight":"normal","marginLeft":"50px","color":"#1a7ed5", "textShadow":"initial"}} >Chi tiết</div>
                        </div>
                        <hr/>
                        <div className='prebooking-body-supplement-info'>
                            <div>HAN → DAD</div><br/>
                            <div class="prebooking-detail-refund" style={{"margin":"0px","padding":"0px"}}>
                                <div><span><img src={Checked} width="30px" /></span>Có hoàn tiền</div><br/>
                                <div style={{"margin":"0px"}}><span><img src={Checked} width="30px" /></span>Có áp dụng đổi lịch bay</div>
                            </div>
                        </div>
                    </div>
                    <div className='prebooking-summary'>
                        <div>Tóm tắt</div>
                        <hr/>
                        <div className='prebooking-summary-adult prebooking-summary-item'>
                            <div>VietJet Air (Người lớn) x1</div>
                            <div>VNĐ 1.043.720</div>
                        </div>
                        <div className='prebooking-summary-total-price prebooking-summary-item'>
                            <div>Gía bạn trả</div>
                            <div>VNĐ 1.043.720</div>
                        </div>
                    </div>
                    <button onClick={() => setRedirect(true)}>Tiếp tục</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreBooking