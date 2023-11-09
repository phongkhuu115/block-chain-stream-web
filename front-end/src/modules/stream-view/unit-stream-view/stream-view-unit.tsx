import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
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

      // Clean up the video player when the component unmounts
      // return () => {
      //   if (player) {
      //     player.dispose();
      //   }
      // };
    }
  }, []);

  return (
    <div className="flex w-full h-full justify-center items-center relative">
      {/* The video element with controls */}
      <video
        ref={videoRef}
        className="video-js vjs-default-skin flex w-full h-full"
        controls
      />
      {/* You can add any additional components or content here */}
      {/* <ConnectButton /> */}
    </div>
  );
};

export default UnitStreamView;
