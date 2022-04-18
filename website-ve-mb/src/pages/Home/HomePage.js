import React, {useState} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FindFlights from '../../components/findFlights';

function FlightSearchingPage() {
    return (
        <div>
        <Header></Header>
        <FindFlights/>
        <Footer></Footer>
        </div>
    )
}

export default FlightSearchingPage