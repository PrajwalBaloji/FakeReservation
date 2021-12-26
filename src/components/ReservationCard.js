import React from 'react'
import Button from './Button'

function ReservationCard({reservation,}) {
    return (
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
    )
}

export default ReservationCard
