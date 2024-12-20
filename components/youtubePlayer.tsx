"use client";
import React, { useState, useRef } from "react";
// import YouTube from "react-youtube";
// import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface Props {
    id: string;
    url: string;
    height: string;
    width: string;
    autoplay: number;
}

const YouTubePlayer: React.FC<Props> = ({ id, url, height, width, autoplay }) => {
    
      const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        event.target.setVolume(40);
        
      }
      const youtubeRef = useRef(null);
    
      const opts: YouTubeProps['opts'] = {
        height: height,
        width: width,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        //   autoplay: autoplay,
        //   controls: 0,
        },
      };
    
      return <YouTube ref={youtubeRef} id={id} className="flex justify-center m-auto" videoId={url} opts={opts} onReady={onPlayerReady} />;
    }
export default YouTubePlayer;