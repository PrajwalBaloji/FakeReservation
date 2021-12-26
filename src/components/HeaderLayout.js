import React from 'react'
import { useLocation } from "react-router-dom"
import { getRouteName, logout } from '../utils'



function HeaderLayout({userName}) {
    const location = useLocation();
    
    return (
        <div className='header-layout'>
            <h1>Fake Reservation</h1>
            <nav>{getRouteName(location.pathname)}</nav>
            <div>
             <p>{userName}</p>
             <p className='logout-link' onClick={logout}>Logout</p>
            </div>
            
        </div>
    )
}

export default HeaderLayout
