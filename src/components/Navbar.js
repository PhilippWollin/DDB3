import React from 'react'
import logo from '../Img/medsolv_logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" alt='Firmenlogo der Sofware Ersteller medsolv' />
        </nav>
    )
}