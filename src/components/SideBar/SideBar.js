import React from 'react'
import './SideBar.css'
import { AiFillHome, AiFillFire } from 'react-icons/ai'
import { SiYoutubegaming } from 'react-icons/si'
import { MdPlaylistAdd } from 'react-icons/md'
import {  useNavigate } from 'react-router-dom'

let home = '#ffffff'
let trend
let game
let savedvideo
let hmBg = 'red'
let trendBg
let gameBg
let saveBg

const SideBar = () => {
    const navigation = useNavigate()

    const navtoHome = () => {
        navigation('/Home')
        home = "#ffffff"
        trend = ''
        game = ''
        savedvideo = ''
        hmBg = 'red'
        trendBg = ''
        gameBg = ""
        saveBg = ""
    }

    const navtoTrend = () => {
        navigation('/Trending')
        home = ""
        trend = '#ffffff'
        game = ''
        savedvideo = ''
        hmBg = ''
        trendBg = 'red'
        gameBg = ""
        saveBg = ""
    }
    const navtoGame = () => {
        navigation('/Gaming')
        home = ""
        trend = ''
        game = '#ffffff'
        savedvideo = ''
        hmBg = ''
        trendBg = ''
        gameBg = "red"
        saveBg = ""
    }

    const navtoSave = () =>{
        navigation('/SavedVideos')
        home = ""
        trend = ''
        game = ''
        savedvideo = '#ffffff'
        hmBg = ''
        trendBg = ''
        gameBg = ""
        saveBg = "red"
    }



    return (
        <div className='sidebar-container'>
            <div className='nav-items'>
                <div className='text-item-container' onClick={navtoHome} style={{ backgroundColor: home }}>
                    <AiFillHome size={30} color={hmBg} />
                    <p className='item-text'>Home</p>
                </div>
                <div className='text-item-container' onClick={navtoTrend} style={{ backgroundColor: trend }}>
                    <AiFillFire size={30} color={trendBg} />
                    <p className='item-text'>Trending</p>
                </div>
                <div className='text-item-container' onClick={navtoGame} style={{ backgroundColor: game }}>
                    <SiYoutubegaming size={30} color={gameBg}/>
                    <p className='item-text'>Gaming</p>
                </div>
                <div className='text-item-container' onClick={navtoSave} style={{ backgroundColor: savedvideo }}>
                    <MdPlaylistAdd size={30} color={saveBg}/>
                    <p className='item-text'>Saved Videos</p>
                </div>
            </div>
            <div className='side-bar-bottom-container'>
                <p className='bottom-text'>CONTACT US</p>
                <div className='icon-container'>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                        className='icon-image'
                    />
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                        className='icon-image'
                    />
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                        className='icon-image'
                    />
                </div>
                <p className='item-text'>
                    Enjoy! Now to see your channels and recommendations!
                </p>
            </div>
        </div>
    )
}

export default SideBar
