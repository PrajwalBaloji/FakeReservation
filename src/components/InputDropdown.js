import React from 'react'

function InputDropdown({callback,name,placeholder,value,destinations}) {
    return (
        <div className='input-dropdown'>
            <input list="sources" name={name} placeholder={placeholder} className='input-dropdown-item' onChange={(e)=>callback(e)} value={value}/>
            <datalist id='sources'>
                {
                  destinations.map((dest,index)=>(
                    <option value={dest} key={index}/>
                  ))
                }
            </datalist>
        </div>
    )
}

export default InputDropdown
