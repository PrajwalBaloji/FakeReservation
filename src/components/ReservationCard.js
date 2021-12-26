import React from 'react'
import Button from './Button'
import { ACTION } from '../App'

function ReservationCard({reservation,dispatch,index}) {
    const deleteCard=()=>{
       dispatch({type:ACTION.CANCEL_JOURNEY,payload:index})
    }
    return (
        <div className='reservation-card'>
                            <div className="journey-date">
                                Date <span>{reservation.journeyDate}</span>

                            </div>
                            <div className="journey-from">
                                from <span>{reservation.source}</span>
                            </div>
                            <div className="jorney-to">
                                To <span>{reservation.destination}</span>
                            </div>
                            <Button label={'cancel'} callback={deleteCard} />
                        </div>
    )
}

export default ReservationCard
