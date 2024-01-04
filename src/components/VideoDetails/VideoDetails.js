import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './VideoDetails.css'
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';
import ReactPlayer from 'react-player';
import {
    AiOutlineLike,
    AiOutlineDislike,
} from 'react-icons/ai'
import { RiPlayListAddFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { addListItem, deleteListItem, likeVideo, unlikeVideo, dislikeVideo, undislikeVideo } from '../../Redux/Action/Action';




const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}


const VideoDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isSaved = useSelector((state) => state.isSaved);
    const message = location.state?.message || '420f102e-1734-4468-8d3c-797134c505b0';
    const saveorNot = isSaved[message]
    const itemIsSave = saveorNot === true ? true : false
    const isLiked = useSelector((state) => state.isLiked);
    const isLike = isLiked[message] === true ? true : false
    const isDisliked = useSelector((state) => state.isDisliked);
    const disLikeStatus = isDisliked[message] === true ? true : false
    const [videoDetails, setVideoDetails] = useState([])
    const [apiStatusVideo, setApiStatusVideo] = useState(apiStatusConstants.initial)
    const islikeBtnColor = isLike ? "red" : ""







    const getVideoDetails = async () => {

        setApiStatusVideo(apiStatusConstants.inProgress)

        const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
        const apiUrl = `https://apis.ccbp.in/videos/${message}`
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        if (response.ok) {
            const fetchedData = await response.json()
            const updatedData1 = {
                id: fetchedData.video_details.id,
                publishedAt: fetchedData.video_details.published_at,
                description: fetchedData.video_details.description,
                title: fetchedData.video_details.title,
                videoUrl: fetchedData.video_details.video_url,

                viewCount: fetchedData.video_details.view_count,
                thumbnailUrl: fetchedData.video_details.thumbnail_url,
                channel: {
                    name: fetchedData.video_details.channel.name,
                    profileImageUrl: fetchedData.video_details.channel.profile_image_url,
                    subscriberCount: fetchedData.video_details.channel.subscriber_count,
                },
            }
            setVideoDetails(updatedData1)
            setApiStatusVideo(apiStatusConstants.success)
        }
        if (response.ok !== true) {
            setApiStatusVideo(apiStatusConstants.failure)
        }
    }

    useEffect(() => {
        getVideoDetails()
    },[message])


    const sendVideoDetails = () => {
        const newItem = {
            id: videoDetails.id,
            videoUrl: videoDetails.videoUrl,
            title: videoDetails.title,
            thumbnailUrl: videoDetails.thumbnailUrl,
            name: videoDetails.channel.name,
            viewCount: videoDetails.viewCount,
            publishedAt: videoDetails.publishedAt,
        }

        if (isSaved[newItem.id]) {
            dispatch(deleteListItem(newItem.id));
        } else {
            dispatch(addListItem(newItem));
        }
    }

    const sendLikeDetails = () => {

        const newItem = {
            id: videoDetails.id,
        }



        if (isLiked[newItem.id]) {
            dispatch(unlikeVideo(newItem.id));
        } else {
            dispatch(undislikeVideo(newItem.id))
            dispatch(likeVideo(newItem.id));
        }


    }

    const sendDisLikeDetails = () => {

        const newItem = {
            id: videoDetails.id,
        }

        if (isDisliked[newItem.id]) {
            dispatch(undislikeVideo(newItem.id));
        } else {
            dispatch(dislikeVideo(newItem.id));
            dispatch(unlikeVideo(newItem.id));
        }

    }


    const disClr = disLikeStatus ? "red" : ""



    const renderSuccessDetails = () => {
        return (
            <div>
                <div>
                    <NavBar />
                    <div className='video-details-container'>
                        <SideBar />
                        <div className='video-detailed-side-container'>
                            <ReactPlayer
                                url={videoDetails.videoUrl}
                                controls
                                width="90%"
                                height="500px"
                            />
                            <div className='video-detailed-text-container'>
                                <p className='video-detailed-title'>{videoDetails.title}</p>
                                <div className='video-detailed-container'>
                                    <p className='view-text'>{videoDetails.viewCount} views</p>
                                    <p className='view-text'>{videoDetails.publishedAt}</p>

                                    <div className='likes-container'>
                                        <button className='icon-container' type='button' onClick={sendLikeDetails}>
                                            <AiOutlineLike color={isLike ? "red" : ''} />
                                            <p style={{ color: islikeBtnColor }}>Like</p>
                                        </button>
                                        <button className='icon-container' type='button' onClick={sendDisLikeDetails}>
                                            < AiOutlineDislike color={disLikeStatus ? "red" : ""} />
                                            <p style={{ color: disClr }}>Dislike</p>
                                        </button>
                                        <button className='icon-container' type='button' onClick={sendVideoDetails}>
                                            <RiPlayListAddFill color={itemIsSave ? "red" : ""} />
                                            <p>{itemIsSave ? "Saved" : "Save"}</p>
                                        </button>
                                    </div>
                                </div>
                                <hr className='horizontal-line' />
                                <div className='channel-container'>
                                    <div className='logo-container'>
                                        <img src={videoDetails.channel.profileImageUrl} alt="channel logo" className='channel-logo' />
                                        <div>
                                            <p className='views-text22'>{videoDetails.channel.name}</p>
                                            <p className='views-text'>{videoDetails.channel.subscriberCount} Subscribers</p>
                                        </div>

                                    </div>
                                    <div className='channel-details-container'>
                                        <p className='views-text-dis'> {videoDetails.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    }

    const rennderLodingDetails = () => {
        return <div><h1>Loading...</h1></div>;
    }

    const renderFailureDetails = () => {
        return <div><h1>Error loading video details</h1></div>;
    }

    const renderAllVideosDetails = () => {
        switch (apiStatusVideo) {
            case apiStatusConstants.success:
                return renderSuccessDetails()

            case apiStatusConstants.inProgress:
                return rennderLodingDetails()

            case apiStatusConstants.failure:
                return renderFailureDetails()
            default:
                return null
        }
    }




    return (
        <>
            {renderAllVideosDetails()}
        </>

    )
}

export default VideoDetails
