import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/main.css'

export default function Navbar() {
    const getActiveLinkStyle = ({ isActive }) => ({
        color: isActive ? 'orange' : 'white',
        // backgroundColor : isActive ? '#00d4ff' : ''
      });
  return (
    <header>
        <nav className='navbar'>
        
            {/* <NavLink to="/">
                <img
                    src="logo512.png"
                    alt="logo_principal"
                    width="49w"
                    height="54px"
                    className='logo'
                />
            </NavLink> */}
       
        <div className='menu'>
            <NavLink to="/" style={getActiveLinkStyle}> Boutique à Saulieu</NavLink>
            <NavLink to="/domicile" style={getActiveLinkStyle}> Livraison à domicile</NavLink>
            <NavLink to="/marche" style={getActiveLinkStyle}>Marchés</NavLink >
            {/* <NavLink to="/bloc" style={getActiveLinkStyle}>blog_Gu</NavLink > */}
        </div>
        
    </nav>
    </header>
    
  )
}
