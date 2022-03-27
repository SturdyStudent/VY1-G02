import React from 'react'
import './sideBar.css'

function sideBar() {
  return (
    <div className='sideBar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              Chuyến bay
            </li>
            <li className='sidebarListItem'>
              Doanh thu
            </li>
            <li className='sidebarListItem'>
              Khuyến mãi
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default sideBar