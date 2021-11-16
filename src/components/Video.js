import React, { useState } from "react";
import ReactPlayer from "react-player";
import Loader from "./Loader/Loader";

const Video = ({video}) => {
  const [isLoaded, setIsLoaded] = useState(false);
    return (
        <React.Fragment>
            {!isLoaded && <Loader />}
            <ReactPlayer url={video} width={"100%"} style={{marginTop: "10px"}} controls={true} onReady={ () => setIsLoaded(true)}/>
        </React.Fragment>
    )
}

export default Video;
