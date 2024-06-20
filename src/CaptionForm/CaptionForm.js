import React, { useState } from 'react';
import './CaptionForm.css';
const CaptionForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [captionText, setCaptionText] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = () => {
    setCaptions([...captions, { text: captionText, time: parseFloat(timestamp) }]);
    setCaptionText('');
    setTimestamp('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url, captions);
  };

  return (
    <div className='form'>
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div className='forminput'>
        <label>Video URL:</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className='forminput'>
        <label>Caption:</label>
        <input
          type="text"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
        />
      </div>
      <div className='forminput'>
        <label>Timestamp (seconds):</label>
        <input
          type="number"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
      </div>
      <div className='btn'>
      <button type="button" onClick={handleAddCaption}>Add Caption</button>
      <button type="submit" >Submit</button>
      </div>
    </form>
    </div>
  );
};

export default CaptionForm;
