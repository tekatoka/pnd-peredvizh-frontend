import React, { useState } from "react";
import ReactPlayer from "react-player";
import Loader from "../Loader/Loader";
import s from "./Video.module.scss";

const Video = ({video}) => {
  const [isLoaded, setIsLoaded] = useState(false);
    return (
        <React.Fragment>
            {!isLoaded && <Loader />}
            <div className={s.videoContainer}>
                <ReactPlayer className={s.videoWrapper} url={video} controls={true} onReady={ () => setIsLoaded(true)}/>
            </div>
        </React.Fragment>
    )
}

export default Video;
