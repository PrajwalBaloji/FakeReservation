import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ACTION } from '../App'
import Button from '../components/Button';
import { isValidEmail } from '../utils'

export default function Login({ dispatch }) {
    let navigate = useNavigate();

    const [credentials, setcredentials] = useState({
        email: '',
        password: '',
    })
    const [validation, setValidation] = useState({
        emailErr: '',
        passwordErr: '',
        loginErr: ''
    })

    const handleCredetials = (e) => {
        const { name, value } = e.target
        setcredentials({ ...credentials, [name]: value })
    }

    const emailValidation = () => {
        if (isValidEmail(credentials.email)) {
            setValidation({
                ...validation,
                emailErr: "please enter a valid email",
            })
            return true
        }
        setValidation({
            ...validation,
            emailErr: '',

        })
        return false
    }

    const passwordValidation = () => {
        if (!credentials.password) {
            setValidation({ ...validation, passwordErr: 'please Enter your password' })
            return true
        }
        setValidation({ ...validation, passwordErr: '' })
        return false
    }

    const checkCredentials = (data) => {
        debugger
        let user = data.filter((val) => {
            return val.email === credentials.email && val.password === credentials.password
        })
        if (user.length > 0) {
            setValidation({ ...validation, loginErr: '' })
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('user',credentials.email)
            navigate('/')
            dispatch({ type: ACTION.LOGIN, payload: credentials.email })
            return 
        }
        setValidation({ ...validation, loginErr: 'incorrect password or username' })
        return 
    }

    const userLogin = () => {
        fetch('http://localhost:8000/users').then(resp => {
            return resp.json()
        }).then(data => {
            checkCredentials(data)
        })
        // let username = 'sample@gmail.com'
        // let password = 'Password@123'
        // if (credentials.email === username && credentials.password === password) {
        //     setValidation({ ...validation, loginErr: '' })
        //     return false
        // }

        // setValidation({ ...validation, loginErr: 'incorrect password or username' })
        // return true
    }


    const handleLogin = () => {
        if (emailValidation()) return
        if (passwordValidation()) return
        userLogin()
        // localStorage.setItem('isLoggedIn', true)
        // navigate('/')
        // dispatch({ type: ACTION.LOGIN, payload: credentials.email })
    }

    console.log(credentials, validation);
    return (
        <div className='login card'>
            <h1>Fake Reservation </h1>
            <h3>Log in to Fake Reservation</h3>
            <div className='input-group'>
                <input type="email" placeholder='Email adress' name='email' onChange={(e) => handleCredetials(e)} value={credentials.email} />
                {validation.emailErr && <p className='error-message'>{validation.emailErr}</p>}
            </div>
            <div className='input-group'>
                <input type="password" placeholder='Password' name='password' onChange={(e) => handleCredetials(e)} value={credentials.password} />
                {validation.passwordErr && <p className='error-message'>{validation.passwordErr}</p>}
            </div>

            <Button label={'Log In'} callback={handleLogin} />
            {validation.loginErr && <p className='error-message'>{validation.loginErr}</p>}
            <div className="register-route">
                <p onClick={() => navigate('/signup')}>Create Account</p>
                <p onClick={() => navigate('/signup')}> Forgot Password?</p>
            </div>
        </div>
    )
}
