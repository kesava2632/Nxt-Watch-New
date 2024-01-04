import React from 'react'
import './NavBar.css'
import { BsMoon } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'



const NavBar = () => {
    const navigation = useNavigate()

    const navtoHomeclick = () =>{
        navigation('/Home')
    }

    const navtoLog = () =>{
        navigation('/')
    }

   
    return (
        <>
            <div className='navHeader'>
                <img src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' alt="website logo" className='web-logo' onClick={navtoHomeclick}/>
            <ul className='content-cntainer'>
                <li style={{ display: 'flex' }}>
                    <button className='theam-Button'><BsMoon /></button>
                </li>
                <li style={{ display: 'flex' }}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className='profile-img'
                />
                </li>
                <li style={{ display: 'flex' }} onClick={navtoLog}>
                    <button className='log-btn'>Logout</button>
                </li>
            </ul>
            </div>

        </>
    )
}

export default NavBar
