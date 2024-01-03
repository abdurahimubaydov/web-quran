import React from 'react'
import './style.css'
import {AiOutlineClose} from 'react-icons/ai'
import Menu from '../menu/menu'

export default function ModalNavbar({state, setState}) {
  return (
    <div className={`modal-card ${state ? 'active' : null}`}>
        <div className="header-section">
            <h1>Quran.com</h1>
            <div className='icon-section'>
                <AiOutlineClose onClick={() => setState(false)} />
            </div>
        </div>
        <div className="benefect">
            <h2>Become A Monthly Donor</h2>
            <p>
                Monthly donations help us improve Quran.com and sustain operations so we focus less on fundraising and more on creating impact.
            </p>
            <div>
                <a href="https://give.quran.com/give/474400/#!/donation/checkout">
                    <button>Donate Monthly</button>
                </a>
                <a href="https://donate.quran.com/">Learn More</a>
            </div>
        </div>
        <Menu/>
    </div>
  )
}