import React, { useState } from 'react'
import './style.css'
import { AiOutlineMenu } from 'react-icons/ai'
import ModalNavbar from './modal-navbar'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [state, setState] = useState(false)
    return (
        <div>
            <nav className='navbar'>
                <div className="navbar-icon">
                    <AiOutlineMenu onClick={() => setState(true)} />
                </div> 
                <Link to={'/'} style={{color: 'white'}}>
                    <h1>Quran.com</h1>
                </Link>
            </nav>
            <ModalNavbar state={state} setState={setState}/>
        </div>
    )
}
