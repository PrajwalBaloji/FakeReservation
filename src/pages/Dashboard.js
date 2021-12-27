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
    const userid = JSON.parse(localStorage.getItem('user'))

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
        fetch(`http://localhost:8000/users/${userid.userId}`).then(resp=>{
          return resp.json()
      }).then(data=>{
          
          dispatch({type:ACTION.SET_RESERVATIONS,payload:data.reservations})
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
        fetch(`http://localhost:8000/users/${userid.userId}`).then(resp => {
            return resp.json()
        }).then(data => {
            let reservation=data.reservations.filter((val,index)=>{
               return id !==index
            })
            let addReservation={...data,reservations:reservation}
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addReservation)
            };
            fetch(`http://localhost:8000/users/${userid.userId}`,requestOptions).then(()=>{
                console.log('added successfully');
                getReservations()
            }).catch(res=>console.log(res))
        })
    }

    const getAdminReservation=()=>{
        fetch(`http://localhost:8000/users`).then(resp => {
            return resp.json()
        }).then(data => {
            let filterReservation=data.map((item,index)=>{
                return item.reservations
            })
            let fullreservationList=[]
            filterReservation.forEach(element => {
                fullreservationList=[...fullreservationList,...element]
            });
            dispatch({type:ACTION.SET_RESERVATIONS,payload:fullreservationList})
        })
    }

    useEffect(()=>{
        userid.userId !== 'admin' ?  getReservations() : getAdminReservation()
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
                                <ReservationCard reservation={reservation} dispatch={dispatch} key={index} cancelReservation={cancelReservation} index={index} />
                            ))
                        }
                    </div>) : <p className='no-reservaiton'>You dont hav any Reservation on ur List </p>

                }
            </main>
        </div>
    )
}

export default Dashboard
