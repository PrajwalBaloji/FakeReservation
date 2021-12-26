import React from 'react'
import { useNavigate } from 'react-router-dom';


function Sidebar() {
    let navigate = useNavigate();
    return (
        <div className='side-bar'>
          
                <p onClick={()=>navigate('/')}>Dashbaord</p>
                <p onClick={()=>navigate('/planjourney')}>Plan Journey Page</p>
        
        </div>
    )
}

export default Sidebar
