import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import './gamingreb.css'

const GamingVideosRed = (props) => {
    const navigation = useNavigate()
    const {details} = props
    const { title, id, thumbnailUrl, publishedAt, viewCount } = details

    const navtoVideoDetailsss = () => {
        navigation('/videos/:id', { state: { message: id } })
    }

    return (
        <li className='video-card-containers' onClick={navtoVideoDetailsss}>

            <img src={thumbnailUrl} alt="video thumbnail" className='thumbnail-iimage' />
            <div className='videocard-bottomcontainer'>
                <div className='videodetails-container'>
                    <p className='videodetails-text'>{title}</p>
                    <p className='videodetails-text'>{viewCount} views</p>
                </div>

            </div>
        </li>
    )
}

export default GamingVideosRed
