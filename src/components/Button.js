import React from 'react'

function Button({label,callback}) {
    return (
        <button className='custom-button' onClick={callback}>
            {label} 
        </button>
    )
}

export default Button
