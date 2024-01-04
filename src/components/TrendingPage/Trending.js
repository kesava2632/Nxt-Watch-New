import React, { useEffect, useState } from 'react'
import './Trending.css'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import TrendVideosRender from '../TreandVideosRender/TrendVideosRender'

const Trending = () => {
  const [treandingVideos, setTrendingVideos] = useState([])

  const getSuggestionVideoss = async () => {

    const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      setTrendingVideos(updatedData)
    }
  }

  useEffect(() => {
    getSuggestionVideoss()
  }, [])

  return (
    <div>
      <NavBar />
      <div className='home-container'>
        <div className='home-silky-container'>
          <SideBar />
        </div>
        <div className='home-side-container'>
          <ul className='videos-container12'>
            {treandingVideos.map(each => (
              <TrendVideosRender key={each.id} details={each} />
            ))}
          </ul>

        </div>

      </div>

    </div>
  )
}

export default Trending
