import React from 'react'
import './sideBar.css'
import {Flight, ShowChart, MoneyOff} from '@material-ui/icons'

function sideBar() {
  return (
    <div className='sideBar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <div className='sidebarList'>
            <a className='sidebarListItem'>
              <Flight />&nbsp;
              Chuyến bay
            </a>
            <a className='sidebarListItem'>
            <ShowChart />&nbsp;
              Doanh thu
            </a>
            <a className='sidebarListItem'>
            <MoneyOff/>&nbsp;
              Khuyến mãi
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sideBar