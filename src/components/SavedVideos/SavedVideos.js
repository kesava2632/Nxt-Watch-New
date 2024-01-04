import React from 'react'
import './SavedVideos.css'
import { AiFillFire } from 'react-icons/ai'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import { useSelector } from 'react-redux';
import VideoCardTwo from '../VideoCardTwo/VideoCardTwo'

const img55 = 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'


const SavedVideos = () => {
    const savedVideosList = useSelector((state) => state.savedVideosList);
    console.log(savedVideosList)

    const isVideosAvailable = savedVideosList.length === 0

    const renderSavedVideos = () => {
        return (
            <>
            {
                isVideosAvailable? (<div>
                    <img src={img55} className='no-available-videos'/>
                    <h1>No saved videos available</h1>
                </div>)
                : (<div className='search-videos-container1'>

                    <div className='trending-head-container1'>
                        <div className='trending-logo'>
                            <AiFillFire size={30} color='red' />
                        </div>
                        <h1 className='trending-head'>Saved videos</h1>
                    </div>
                    <ul className='videos-container12'>
                        {savedVideosList.map(each => (
                            <VideoCardTwo key={each.id} details={each} />
                        ))}
                    </ul>
                </div>)
            }
            </>
        )
    }



    return (
        <div>
            <NavBar />
            <div className='home-container'>
                <div className='home-silky-container'>
                    <SideBar />
                </div>
                <div className='home-side-container'>
                    {renderSavedVideos()}
                </div>

            </div>
        </div>
    )
}

export default SavedVideos
