import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function SignUp() {
    let navigate = useNavigate();
    return (
        <div className='sign-up card'>
            <h1>Fake Reservation </h1>
            <h3>Create a new account</h3>
            <input type="email" placeholder='Email adress'/>
            <input type="number" placeholder='Phone number'/>
            <input type="password" placeholder='new password'/>
            <input type="password" placeholder='confirm password'/>
            <Button label={'Create Account'} />
            <p >Already hav an Account <span onClick={()=>navigate('/login')}>Login?</span></p>
        </div>
    )
}

export default SignUp
