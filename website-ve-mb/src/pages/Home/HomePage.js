import React, {useState} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FindFlights from '../../components/findFlights';
import User from '../User/User';
import './HomePage.css';

function FlightSearchingPage() {
    return (
        <div>
            <Header></Header>
            <div class="vmbbox">
                <table>
                    <tr>
                        <td>Vé máy bay</td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div class="findbox"><FindFlights/></div>
        </div>
    )
}

export default FlightSearchingPage