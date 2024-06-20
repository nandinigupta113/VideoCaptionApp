import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
const VideoPlayer = ({ videoUrl, captions }) => {
  const playerRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const caption = captions.find(caption => Math.abs(caption.time - currentTime) < 1);
        setCurrentCaption(caption ? caption.text : '');
      }
    }, 500);
    return () => clearInterval(interval);
  }, [captions]);

  return (
    <div className='Videoin'>
      <ReactPlayer ref={playerRef} url={videoUrl} controls width="100%" height="100%" />
      {currentCaption && (
        <div className="caption">
          {currentCaption}
        </div>
      )}
    </div>
  );
};


export default VideoPlayer;
