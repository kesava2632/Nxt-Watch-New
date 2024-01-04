import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import './Home.css'
import { IoMdClose } from 'react-icons/io'
import SearchVideos from '../SearchVideos/SearchVideos'




const HomePage = () => {

    const [bannerflex, setbannerflex] = useState('flex')

   

    return (
        <div>
            <NavBar />
            <div className='home-container'>
                <div className='home-silky-container'>
                    <SideBar />
                </div>
                <div className='home-side-container'>
                    <div className="banner-image-container" style={{display:bannerflex}}>
                        <div className='model-container'>
                            <img
                                src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                                alt="nxt watch logo"
                                className='banner-image'
                            />
                            <p className='banner-text'>Buy Nxt Watch Premium</p>
                            <button className='get-it-button'>GET IT NOW</button>
                        </div>
                        <button className='banner-remove-icon' type='button' onClick={()=>{setbannerflex('none')}}><IoMdClose size={20} color="#231f20" /></button>

                    </div>
                    <SearchVideos />
                </div>

            </div>

        </div>
    )
}

export default HomePage
