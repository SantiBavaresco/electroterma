"use client";
import React from 'react';

const VideoAutoPlayer: React.FC = () => {
  return (
    <video
      autoPlay
      loop
      muted
      // type='video/mp4'
      src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
      width={600}
    />
  );
};

export default VideoAutoPlayer;