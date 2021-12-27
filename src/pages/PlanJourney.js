import React, { useState } from 'react'
import HeaderLayout from '../components/HeaderLayout'
import Sidebar from '../components/Sidebar'
import InputDropdown from '../components/InputDropdown'
import Button from '../components/Button'
import { ACTION } from '../App'

function PlanJourney({dispatch,state}) {
    const initialJourney={
        source:'',
        destination:'',
        journeyDate:'',
    }
    const [journey,setjourney]=useState(initialJourney)
    const [errorMsg,setErrorMsg]=useState('')

    const handleJourneyDetails=(e)=>{
      const {name,value}=e.target
      setjourney({
          ...journey,
          [name]:value
      })
    }

    const validateJourneyDetails =()=>{
        if(!journey.destination || !journey.source || !journey.journeyDate)
        {
         setErrorMsg('please attend all the fields')
         return true
        }
        
        if(journey.destination===journey.source) {
            setErrorMsg('please choose different source or destination')
         return true 
        }
        setErrorMsg('')
        return false
    }

    const handleCreateJourney =()=>{
      
        if(validateJourneyDetails()) return 
        const userid = JSON.parse(localStorage.getItem('user'))
        fetch(`http://localhost:8000/users/${userid.userId}`).then(resp => {
            return resp.json()
        }).then(data => {
            let reservation=[...data.reservations,journey]
            let addReservation={...data,reservations:reservation}
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addReservation)
            };
            fetch(`http://localhost:8000/users/${userid.userId}`,requestOptions).then(()=>{
                console.log('added successfully');
            }).catch(res=>console.log(res))
        })
       
        setjourney(initialJourney)
    }
    return (
        <div className='page-container'>
            <HeaderLayout />
            <Sidebar />
            <main className='main-content'>
              <div className="create-reservation card">
                     <InputDropdown placeholder={" Choose Source"} name='source' callback={handleJourneyDetails} value={journey.source} destinations={state.destinations}/>
                     <InputDropdown placeholder={"Choose destination"} name='destination' callback={handleJourneyDetails} value={journey.destination} destinations={state.destinations}/>
                     <label className='label'>Pick Journey Date :  <input type="date" name='journeyDate' onChange={(e)=>handleJourneyDetails(e)} value={journey.journeyDate}/></label>
                    <Button label={'Create Reservation'} callback={handleCreateJourney}/>
                    { errorMsg && <p className='error-message'>{errorMsg}</p>}
              </div>
            </main>
        </div>
    )
}

export default PlanJourney
