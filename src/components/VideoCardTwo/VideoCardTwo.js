import React from 'react'
import './VideoCardTwo.css'
import { useNavigate } from 'react-router-dom'

const VideoCardTwo = (props) => {
  const navigation = useNavigate()
    const {details} = props
    const {title,thumbnailUrl,name,viewCount,publishedAt,id} = details

    const navtoVideocardDetails = () =>{
      navigation('/videos/:id',{ state: { message: id } })
  }

  return (
    <li className='videocardcontainer23' onClick={navtoVideocardDetails}>
      <img src={thumbnailUrl} alt="thumnil-image" className='thumbnail-imag23'/>
      <div className='video-card-bottom-container23'>
          <div className='video-details-container23'>
                 <p className='Video-details-text23'>{title}</p>
                 <p className='Video-details-text23'>{name}</p>
                 <p className='Video-details-text23'>{viewCount}</p>
                 <p className='Video-details-text23'>{publishedAt}</p>
          </div>
      </div>
      
    </li>
  )
}

export default VideoCardTwo
