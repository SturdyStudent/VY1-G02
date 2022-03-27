import React from 'react'
import Header from './components/header'
import SideBar from './components/sideBar'
import './PartnerApp.css'

function PartnerApp() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <SideBar/>
        <div className='others'>other</div>
      </div>
    </div>
  )
}

export default PartnerApp