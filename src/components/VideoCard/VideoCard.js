import React from 'react'
import './videoCard.css'
import { useNavigate } from 'react-router-dom'


const VideoCard = (props) => {
    const navigation = useNavigate()
    const { details } = props
    const { channel, title, id, thumbnailUrl, publishedAt, viewCount } = details
    const { name, profileImageUrl } = channel

    const navtoVideoDetails = () =>{
        navigation('/videos/:id',{ state: { message: id } })
    }

    return (
        <li className='video-card-container' onClick={navtoVideoDetails}>
            <img src={thumbnailUrl} className='thumbnail-image' />
            <div className='video-card-bottom-container'>
                <img src={profileImageUrl} className='profile-image' />
                <div className='video-detailed-container'>
                    <p className='video-detailed-text'>
                        {title}
                    </p>
                </div>
            </div>
            <div style={{textAlign:'start'}}><p className='video-detailed-text'>{name}</p></div>
            <div className='video-bottom-text-container'>
                        <p className='video-detailed-text2'>
                            {viewCount} views
                        </p>

                        <p className='video-detailed-text2'>
                            {publishedAt}
                        </p>
                    </div>
        </li>
    )
}

export default VideoCard
