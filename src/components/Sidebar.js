import React from 'react'
import { useNavigate } from 'react-router-dom';


function Sidebar() {
    let navigate = useNavigate();
    const userid = JSON.parse(localStorage.getItem('user'))
    return (
        <div className='side-bar'>
          
                <p onClick={()=>navigate('/')}>Dashbaord</p>
                {
                   userid.userId !== 'admin' && <p onClick={()=>navigate('/planjourney')}>Plan Journey Page</p>
                }
                
        
        </div>
    )
}

export default Sidebar
