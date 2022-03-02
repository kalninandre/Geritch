import React, { useRef, useState } from 'react';

import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import './Intro.css';

const Intro = () => {

  const [videoPlayer, setVideoPlayer] = useState(false);
  const videoRef = useRef();

  const videoPlayerHandler = () => {
    
    if (videoPlayer) {
      videoRef.current.pause();
    }
    else {
      videoRef.current.play();
    }

    setVideoPlayer(!videoPlayer);
  };
  
  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={videoRef}
        type='video/mp4'
        controls={false}
        loop
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay-circle flex__center' onClick={videoPlayerHandler}>
        {!videoPlayer ? <BsFillPlayFill color={'#FFF'} fontSize={40}/> : <BsPauseFill color={'#FFF'} fontSize={40}/>}
        </div>
      </div>
    </div>
  );
}

export default Intro;
