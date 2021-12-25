import React from 'react'
import Button from '../components/Button/Button'

export default function Login() {

    return (
        <div className='login card'>
            <h1>Fake Reservation </h1>
            <h3>Log in to Fake Reservation</h3>
            <input type="email" placeholder='Email adress' />
            <input type="password" placeholder='Password' />
            <Button label={'Log In'} />
             <div className="register-route">
                 <p>Create Account</p>
                 <p> Forgot Password?</p>
             </div>
        </div>
    )
}
