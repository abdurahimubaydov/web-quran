import React from 'react'
import './style.css'
import {AiFillHome} from 'react-icons/ai'
import {BiRadio} from 'react-icons/bi'
import {CgMediaLive} from 'react-icons/cg'

export default function Menu() {

  return (
    <div className='menu-section'>
        <div className="menu-card-menu">
            MENU
        </div>
        <div className="menu-card">
          <div>
            <AiFillHome 
              color='#485056' 
              style={{marginRight: '10px'}}
              className='menu-icon'
            /> Home
          </div>
        </div>
        <div className="menu-card">
          <div>
            <BiRadio 
              color='#485056' 
              style={{marginRight: '10px'}}
              className='menu-icon'
            /> Quran Radio
          </div>
          
        </div>
        <div className="menu-card">
          <div>
            <CgMediaLive
            color='#485056' 
            style={{marginRight: '10px'}}
            className='menu-icon'
            /> Recitors
          </div>
        </div>
    </div>
  )
}
