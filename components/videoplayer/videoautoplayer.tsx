"use client";

import React, { useEffect, useRef } from 'react';
interface Props {
  url: string;
  height?: string;
  width?: string;
  autoplay?: number;
}

const VideoAutoPlayer: React.FC<Props> = ({ url, height, width, autoplay }) => {


  return (
    <video
      loop muted autoPlay 
      src={url}
      width="100%"
      // height="100%"
    />
  );
};

export default VideoAutoPlayer;