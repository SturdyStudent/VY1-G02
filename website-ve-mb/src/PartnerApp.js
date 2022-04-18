import React from 'react'
import Header from './components/header'
import SideBar from './components/sideBar'
import CreateFlight from './pages/CreateFlight/CreateFlight'
import FlightModal from './components/FlightModal'
import './PartnerApp.css'

function PartnerApp() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <SideBar/>
        <div className='others'>
          <CreateFlight/>
      
        </div>
      </div>
    </div>
  )
}

export default PartnerApp