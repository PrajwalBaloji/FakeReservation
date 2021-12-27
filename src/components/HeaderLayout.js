import React from 'react'
import { useLocation } from "react-router-dom"
import { getRouteName, logout } from '../utils'



function HeaderLayout() {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className='header-layout'>
            <h1>Fake Reservation</h1>
            <nav>{getRouteName(location.pathname)}</nav>
            <div>
             <p>{user.userName}</p>
             <p className='logout-link' onClick={logout}>Logout</p>
            </div>
            
        </div>
    )
}

export default HeaderLayout
