"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { getAxiosParam } from "../helpers/api";
import { useAxios } from "../hooks/useAxios";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: "https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      });
    }
  });

  console.log(
    useAxios(getAxiosParam("https://provinces.open-api.vn/api/?depth=2"))
  );

  //   <main>
  //   <video controls ref={videoRef} className='video-js' />
  //   <ConnectButton />
  // </main>

  return (
    <main className="flex items-start gap-2.5 flex-[1_0_0] self-stretch"></main>
  );
};

export default Home;
