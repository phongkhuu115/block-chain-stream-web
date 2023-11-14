"use client";

import { Card } from "@components/ui/card";
import WagmiComponent from "@components/wagmiComponent/wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "./css/video-js.scss";
type Props = {};

const UnitStreamView = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // Check if the videoRef exists before initializing video.js
    if (videoRef.current) {
      // Initialize video.js
      const player = videojs(videoRef.current, {
        sources: [
          {
            src: "https://stream.mux.com/GJjLF93MGEmq4VfidIdZ4oMMAJRhEjSQ.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      });
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-[400px] justify-center items-center relative">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin w-full h-full flex flex-col justify-center items-center rounded-xl"
        controls
      />
    </div>
  );
};

export default UnitStreamView;
