import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './SearchVideos.css'
import VideoCard from '../VideoCard/VideoCard'




const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}



const SearchVideos = () => {
    const [searchInput, setsearchInput] = useState("")
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [searchedVideo, setSearchedVideos] = useState([])
    const [searchValue, setsearchValue] = useState("")

    const onChangeSearchInput = (e) => {
        setsearchInput(e.target.value)
    }


    const isVideosAvailable = searchedVideo.length === 0


    const getSuggestedVideos = async () => {
        setApiStatus(apiStatusConstants.inProgress)
        const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
        const options = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y`,
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
            setSearchedVideos(updatedData)
            setApiStatus(apiStatusConstants.success)
        }
        if (response.ok !== true) {
            setApiStatus(apiStatusConstants.failure)
        }
    }

    useEffect(() => {
        getSuggestedVideos()
    }, [searchValue])

    const renderHomeVideos = () => {

        return (isVideosAvailable ? (
            <div>
                <div>
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={onChangeSearchInput}
                    />
                    <button
                        type="button" onClick={() => { setsearchValue(searchInput) }}
                    >
                        <AiOutlineSearch />
                    </button>
                </div>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    className="no-products-img"
                    alt="no videos"
                />
                <h1 className="no-products-heading">
                    No Search results found
                </h1>
                <p className="no-products-description">
                    Try different key words or remove search filter
                </p>
                <button>Retry</button>
            </div>
        ) : (
            <div className='search-videos-container'>
                <div >
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={onChangeSearchInput}
                        className='search-input'
                    />
                    <button
                        type="button" onClick={() => { setsearchValue(searchInput) }} className='search-btn-contaier'
                    >
                        <AiOutlineSearch size={20}/>
                    </button>
                </div>
                <ul className='videos-container'>
                    {searchedVideo.map(each => (
                        <VideoCard key={each.id} details={each} />
                    ))}
                </ul>
            </div>
        )
        )
    }

    const renderLoadingView = () => (
        <div
            className="products-loader-container"
        >
            <p>wait</p>
        </div>
    )

    const renderFailureView = () => {
        <div className='failuer-container'>
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
                className="jobs-failure-img"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p className="jobs-failure-description">
                We are having some trouble to complete your request.Please try again.
            </p>
        </div>
    }

    const renderAllVideos = () => {
        switch (apiStatus) {
            case apiStatusConstants.success:
                return renderHomeVideos()

            case apiStatusConstants.inProgress:
                return renderLoadingView()

            case apiStatusConstants.failure:
                return renderFailureView()
            default:
                return null
        }
    }

    return (
        <div>
            <h1>{renderAllVideos()}</h1>
        </div>
    )
}

export default SearchVideos
