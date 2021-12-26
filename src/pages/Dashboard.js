import React from 'react'
import Button from '../components/Button'
import HeaderLayout from '../components/HeaderLayout'
import InputDropdown from '../components/InputDropdown'
import ReservationCard from '../components/ReservationCard'
import Sidebar from '../components/Sidebar'

function Dashboard({ state }) {
    return (
        <div className='page-container'>
            <HeaderLayout userName={state.userName} />
            <Sidebar />
            <main className='main-content'>
                <div className="reservation-list-container">
                         
                        <InputDropdown placeholder={"filter using source"}/>
                        <InputDropdown placeholder={"filter using destination"}/>
                    {/* {
                      state.reservationList.map((reservation)=>(
                          <ReservationCard reservation={reservation}/>
                      ))
                  } */}
                    <div className='reservation-card'>
                        <div className="journey-date">
                            {/* {reservation.journeyDate} */}
                            12-10-2021
                        </div>
                        <div className="journey-from">
                            {/* {reservation.source} */}
                            banglore
                        </div>
                        <div className="jorney-to">
                            {/* {reservation.destination} */}
                            Mumbai
                        </div>
                        <Button label={'cancel'} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
