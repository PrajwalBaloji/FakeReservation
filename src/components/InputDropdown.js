import React from 'react'

function InputDropdown({label,callback,name,placeholder}) {
    return (
        <div className='input-dropdown'>
            <input list="sources" name={name} placeholder={placeholder} className='input-dropdown-item' onChange={(e)=>callback(e)}/>
            <datalist id='sources'>
                <option value="Bengaluru" />
                <option value="Mumbai" />
                <option value="Chennai" />
                <option value="Kolakatta" />
                <option value="Kerala" />
                <option value="Belagavi" />
            </datalist>
        </div>
    )
}

export default InputDropdown
