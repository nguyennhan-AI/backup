import React from 'react';
import { useState } from 'react';
import "./cam-style.css";
import WebcamCapture from './WebcamCapture';

const CameraButton = () => {
  const [showWebcam,setShowWebcam] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [visualCountdown, setVisualCountdown] = useState(true);
  const handleCLick = () => {
    setShowWebcam(true);
    startCountdown();
  };

  const startCountdown = () => {
    let counter = 4;
    const intervalId = setInterval(() => {
      counter -= 1;
      setCountdown(counter);
      if (counter === 0) {
        clearInterval(intervalId);
        setVisualCountdown(false);
      }
    }, 1000);
  };
  return (
    <div className='mycamera'>
          {showWebcam && <div className="blur-background"></div>}
          <div className={`camera-layer ${showWebcam ? 'move-up' : ''}`}>
        {!showWebcam&& (<button onClick={handleCLick} className='camera-start' > Start </button>)}
        {showWebcam&&<WebcamCapture></WebcamCapture>}
        {showWebcam && visualCountdown && <div className='text-alert'>You have {countdown} seconds </div>}
        </div>
    </div>
  );
};

export default CameraButton;