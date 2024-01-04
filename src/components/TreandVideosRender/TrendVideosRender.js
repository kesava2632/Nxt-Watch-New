import React from 'react'
import { Form, useNavigate } from 'react-router-dom'


const TrendVideosRender = (props) => {
    const navigation = useNavigate()
    const {details} = props
    const {title,thumbnailUrl,name,viewCount,id,publishedAt} = details

    const navtoTreandDetails = () =>{
        navigation('/videos/:id',{ state: { message: id } })
    }

  return (
    <li className='videocardcontainer23' onClick={navtoTreandDetails}>
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

export default TrendVideosRender