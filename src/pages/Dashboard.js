import React, { useEffect, useState } from 'react'
import { getData } from '../API/api'
import { ACTION } from '../App'
import Button from '../components/Button'
import HeaderLayout from '../components/HeaderLayout'
import InputDropdown from '../components/InputDropdown'
import ReservationCard from '../components/ReservationCard'
import Sidebar from '../components/Sidebar'

function Dashboard({ state,dispatch}) {
    const [list,setList]=useState([])
    const [filterVal,setfilterVal]=useState('')

    const getfilteredJourneyList =(e) =>{
        setfilterVal(e.target.value)
    }

    const handleApplyFilter =()=>{
        let filteredList=state.reservationList.filter((item,index)=>{
            return item.source.includes(filterVal) || item.destination.includes(filterVal)
        })
        setList(filteredList)

    }

    const getReservations=()=>{
        fetch('http://localhost:8000/reservations').then(resp=>{
          return resp.json()
      }).then(data=>{
          dispatch({type:ACTION.SET_RESERVATIONS,payload:data})
      })
    }

    const getDestinations=()=>{
        fetch('http://localhost:8000/destinations').then(resp=>{
          return resp.json()
      }).then(data=>{
          dispatch({type:ACTION.SET_DESTINATION,payload:data})
      })
    }

    const cancelReservation=(id)=>{
       fetch(`http://localhost:8000/reservations/${id}`,{method:"DELETE"}).then(()=>{
        getReservations()
       })
    }

    useEffect(()=>{
        getReservations()
        getDestinations()
    },[])

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
                            <InputDropdown placeholder={"choose using source or destination"} callback={getfilteredJourneyList} destinations={state.destinations}/>
                            <Button label={'filter'} callback={handleApplyFilter}/>
                        </div>

                        {
                            list.map((reservation,index)=>(
                                <ReservationCard reservation={reservation} dispatch={dispatch} key={reservation.id} cancelReservation={cancelReservation} />
                            ))
                        }
                    </div>) : <p className='no-reservaiton'>You dont hav any Reservation on ur List </p>

                }
            </main>
        </div>
    )
}

export default Dashboard
