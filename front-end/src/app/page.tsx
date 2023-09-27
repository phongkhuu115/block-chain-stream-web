'use client';
import { useAxios } from '../hooks/useAxios';
import { getAxiosParam } from '../helpers/api';
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const MainPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: 'https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8',
            type: 'application/x-mpegURL',
          },
        ],
      });
    }
  });

  console.log(
    useAxios(getAxiosParam('https://provinces.open-api.vn/api/?depth=2'))
  );

  return (
    <main>
      <video controls ref={videoRef} className='video-js' />
      <ConnectButton />
    </main>
  );
};

export default MainPage;
