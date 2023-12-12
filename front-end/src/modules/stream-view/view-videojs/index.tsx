"use client";

import { STREAM_SERVER } from "helpers/env-provider";
import { FC, useEffect, useRef } from "react";
import videojs from "video.js";
import "videojs-quality-selector-hls";
import "./index.scss";

type Props = {
  streamKey?: string;
};

const View: FC<Props> = ({
  streamKey = "Iphone",
  ...props
}: Props) => {
  const streamLiveUrl = `${STREAM_SERVER}/live/${streamKey}.m3u8`;
  const streamVODUrl = `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`;
  const streamBuckVODUrl = `https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8`;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoJsOptions = {
      liveui: true,
      liveTracker: true,

      autoplay: true,
      controls: true,
      sources: [
        {
          src: streamBuckVODUrl,
          type: "application/x-mpegURL",
        },
      ],
      lowLatency: true,
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90,
      playbackRates: [0.5, 1, 1.5, 2],
      plugins: {
        qualityLevels: {},
      },
    };

    // Check if the videoRef exists before initializing video.js
    if (videoRef.current) {
      const player = videojs(videoRef.current, { ...videoJsOptions });
      player.qualitySelectorHls();
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

export default View;