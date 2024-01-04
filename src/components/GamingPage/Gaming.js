import React, { useEffect, useState } from 'react'
import './Gaming.css'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import GamingVideosRed from '../GamingVideosRender/GamingVideosRed'
import { GiCaravel } from "react-icons/gi";

const Gaming = () => {
  const [gamingVideos, setGamingVideos] = useState([])

  const getSuggestionVideos = async () => {
    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      setGamingVideos(updatedData)
    }

  }

  useEffect(() => {
    getSuggestionVideos()
  }, [])

  return (
    <div>
      <NavBar />
      <div className='home-container'>
        <div className='home-silky-container'>
          <SideBar />
        </div>
        <div className='homesidecontainer'>
          <div className='trending-head-container1'>
            <div className='trending-logo' style={{backgroundColor:'lightcoral'}}>
            <GiCaravel color='blue' size={30}/>
            </div>
            <h1 className='trending-head'>Gaming videos</h1>
          </div>
          <div className='home-side-container'>
            <ul className='videos-container1233'>
              {gamingVideos.map(each => (
                <GamingVideosRed key={each.id} details={each} />
              ))}
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Gaming
