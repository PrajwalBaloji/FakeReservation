import React from 'react'
import Button from '../components/Button/Button'

function SignUp() {
    return (
        <div className='sign-up card'>
            <h1>Fake Reservation </h1>
            <h3>Create a new account</h3>
            <input type="email" placeholder='Email adress'/>
            <input type="number" placeholder='Phone number'/>
            <input type="password" placeholder='new password'/>
            <input type="password" placeholder='confirm password'/>
            <Button label={'Create Account'} />
        </div>
    )
}

export default SignUp
