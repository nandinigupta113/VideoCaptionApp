import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import CaptionForm from './CaptionForm/CaptionForm';
import './App.css';
const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const handleFormSubmit = (url, captions) => {
    setVideoUrl(url);
    setCaptions(captions);
  };

  return (
    <div>
      <h1 className='heading'>Video Caption App</h1>
      <div className='contentbox'>
      <CaptionForm onSubmit={handleFormSubmit} />
      <div className='videobox'>
      {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
      </div>
      </div>
    </div>
  );
};



export default App;
