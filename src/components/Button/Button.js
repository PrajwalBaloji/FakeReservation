import React from 'react'

function Button({label,callback}) {
    return (
        <button className='custom-button'>
            {label} 
        </button>
    )
}

export default Button
