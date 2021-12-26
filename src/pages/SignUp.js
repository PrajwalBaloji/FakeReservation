import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { isValidEmail } from '../utils';
import { ACTION } from '../App';

function SignUp({dispatch}) {
    const initialUserState = {
        email: '',
        password: '',
        phoneNumber: '',
        confirmPassword:''
    }
    const [user, setUser] = useState(initialUserState)
    const [userErr, setUserErr] = useState({
        emailErr: '',
        passwordErr: '',
        loginErr: ''
    })

    let navigate = useNavigate();

    const createUserData = (e) => {
        const { value, name } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const addUser=()=>{
        let usertobeAdded={...user}
        delete usertobeAdded.confirmPassword
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usertobeAdded)
        };
        fetch('http://localhost:8000/users',requestOptions).then(()=>{
            console.log('added successfully');
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('user',user.email)
            navigate('/')
            dispatch({ type: ACTION.LOGIN, payload: user.email })
            return 
        }).catch(res=>console.log(res))
    }
    const handleSignUp = () => {
        debugger
        if(!user.email || !user.password || !user.phoneNumber || !user.confirmPassword ){
            setUserErr({
                ...userErr,
                loginErr:'please attend all the fields'
            })
            return
        }
        if(user.password!==user.confirmPassword){
            setUserErr({
                ...userErr,
                loginErr:'passwords are not matching'
            })
            return 
        }
        if(isValidEmail(user.email)){
            setUserErr({
                ...userErr,
                emailErr:'please enter a valid email'
            })
            return
        }

        setUserErr({
            emailErr: '',
            passwordErr: '',
            loginErr: ''
        })

        addUser()
        setUser(initialUserState)
       

    }
    return (
        <div className='sign-up card'>
            <h1>Fake Reservation </h1>
            <h3>Create a new account</h3>
            <div>
              <input type="email" placeholder='Email adress' name={'email'} onChange={(e) => createUserData(e)} value={ user.email} />
              {userErr.emailErr && <p className='error-message'>{userErr.emailErr}</p>}
            </div>
            <input type="number" placeholder='Phone number' name='phoneNumber' onChange={(e) => createUserData(e)} value={ user.phoneNumber}/>
            <input type="password" placeholder='new password' name={'password'} onChange={(e) => createUserData(e)} value={ user.password}/>
            <input type="password" placeholder='confirm password' name={'confirmPassword'} onChange={(e) => createUserData(e)} value={ user.confirmPassword}/>
            <Button label={'Create Account'} callback={handleSignUp} />
            {userErr.loginErr && <p className='error-message'>{userErr.loginErr}</p> }
            <p >Already hav an Account <span onClick={() => navigate('/login')}>Login?</span></p>
        </div>
    )
}

export default SignUp
