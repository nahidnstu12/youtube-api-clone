import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import './_video.scss'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/DyvDXY1aAzA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjpnqIpRrltzJ0EcbXRi8N2HtCWQ" alt="thumbnail"/>
                <span>5.50</span>
            </div>
            <div className="video__title">
                Create app in 5 minutes #made by chintu
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 50 Views •
                </span>
                <span>5 days ago</span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo" alt="channel"/>
                <p>Rainbow Hat Jr.</p>
            </div>

        </div>
    )
}

export default Video
