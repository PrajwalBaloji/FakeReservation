import React from 'react'
import HeaderLayout from '../components/HeaderLayout'
import Sidebar from '../components/Sidebar'

function Dashboard({state}) {
    return (
        <div className='page-container'>
            <HeaderLayout userName={state.userName}/>
            <Sidebar/>
            <main className='main-content'>

            </main>
        </div>
    )
}

export default Dashboard
