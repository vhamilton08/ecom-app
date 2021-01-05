import React, { useState } from 'react'
import './Auth.scss';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';


const Auth = (props) => {
const [hasAccount, setHasAccount] = useState(true)
const [usernameInput, setUsernameInput] = useState('')
const [passwordInput, setPasswordInput] = useState('')

const usernameInputHandle = (e) => {
    setUsernameInput(e.target.value)
}

const passwordInputHandle = (e) => {
    setPasswordInput(e.target.value)
}

const register = () => {
    axios.post('/auth/register',
    {username: usernameInput, password: passwordInput})
    .then(res => {
        props.getUser()
        props.history.push('/')
    }).catch(err => console.log(err, 'username taken'))
}

const login = () => {
    axios.post('/auth/login', 
    {username: usernameInput, password: passwordInput})
    .then(res => {
        props.getUser()
        props.history.push('/')
    }).catch(err => console.log(err))
}
return (
    <div className='authContainer'>
        <div className='authbox'>

        <h1>{hasAccount ? 'Login' : 'Register'}</h1>
        <form className='forms'>
            <label htmlFor='username'>username</label>
            <input id='username' name='username' type='text' value={usernameInput} onChange={usernameInputHandle}/>
            <label htmlFor='password'>password</label>
            <input id='password' name='password' type='password' value={passwordInput} onChange={passwordInputHandle}/>
        </form>
        {hasAccount ? (
            <div className="buttonContainer">
                <button className='loginbtn' onClick={login}>Login</button>
                <button className='shadowbtn' onClick={() => {
                    setHasAccount(!hasAccount)}}>Need to Signup?</button>
            </div>): (
                <div className='buttonContainer'>
                <button className='loginbtn' onClick={register}>Register</button>
                <button className='shadowbtn' onClick={() => {setHasAccount(!hasAccount)}}>Already have an account?</button>
            </div>)}

                </div>
    </div>
    )
}
export default connect(null, {getUser})(Auth);