import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import HeaderLayout from '../components/HeaderLayout'
import InputDropdown from '../components/InputDropdown'
import ReservationCard from '../components/ReservationCard'
import Sidebar from '../components/Sidebar'

function Dashboard({ state,dispatch}) {
    const [list,setList]=useState([])
    const [filterVal,setfilterVal]=useState('')

    const getfilteredJourneyList =(e) =>{
        debugger
        setfilterVal(e.target.value)
    }

    const handleApplyFilter =()=>{
        debugger
        let filteredList=state.reservationList.filter((item,index)=>{
            return item.source.includes(filterVal) || item.destination.includes(filterVal)
        })
        setList(filteredList)

    }

    useEffect(() => {
       setList(state.reservationList)
    }, [state.reservationList])
    return (
        <div className='page-container'>
            <HeaderLayout userName={state.userName} />
            <Sidebar />
            <main className='main-content dashboard'>
                <h2>Reservation List</h2>
                {
                    list.length > 0 ? (<div className="reservation-list-container">
                        <div className="filter-options">
                            <p>filter using source or destination</p>
                            <InputDropdown placeholder={"choose using source or destination"} callback={getfilteredJourneyList}/>
                            <Button label={'filter'} callback={handleApplyFilter}/>
                        </div>

                        {
                            list.map((reservation,index)=>(
                                <ReservationCard reservation={reservation} dispatch={dispatch} key={index} index={index}/>
                            ))
                        }
                    </div>) : <p className='no-reservaiton'>You dont hav any Reservation on ur List </p>

                }
            </main>
        </div>
    )
}

export default Dashboard
