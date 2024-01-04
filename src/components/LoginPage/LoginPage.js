import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
    const navigation = useNavigate()
    const [isCheck, setCheckinput] = useState(false)
    
    const navToHome = () =>{
        navigation('/Home')
    }
    return (
        <div className='container'>
            <form className='login-card'>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="login-image" className='login-img' />
                <div className='input-container'>
                    <label htmlFor="username" className='login-text'>USERNAME</label>
                    <input type='text' className='userfield' placeholder='UserName' id="username" />
                </div>
                <div className='input-container'>
                    <label className='login-text'>PASSWORD</label>
                    <input type={isCheck ? 'text' : 'password'} className='inputfield' placeholder='Password' />
                </div>
                <div className='show-container'>
                    <input
                        type="checkbox"
                        id="show-password"
                        className='check-box-input'
                        onClick={()=>{setCheckinput(!isCheck)}}
                    />
                    <label htmlFor="show-password" className='login-text'>Show Password</label>
                </div>
                <button className='login-btn' type='button' onClick={navToHome}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
