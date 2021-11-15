import React, { Component } from "react";
import ReactPlayer from "react-player";

const Video = ({video}) => {
    return(
        <>
          <ReactPlayer url={video} width={"100%"} style={{marginTop: "10px"}} controls={true} />
        </>
    )
}

export default Video;