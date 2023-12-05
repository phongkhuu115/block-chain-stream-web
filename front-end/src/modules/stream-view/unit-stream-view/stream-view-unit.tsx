"use client";

import { STREAM_SERVER } from "helpers/env-provider";
import { FC, useEffect, useRef } from "react";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-quality-selector-hls";
import "./css/video-js.scss";
import "./css/quality-selector.scss";

type Props = {
  streamKey: string;
};

const UnitStreamView: FC<Props> = ({
  streamKey = "Iphone",
  ...props
}: Props) => {
  const streamLiveUrl = `${STREAM_SERVER}/live/${streamKey}.m3u8`;
  const streamVODUrl = `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`;
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: streamVODUrl,
          type: "application/x-mpegURL",
        },
      ],
      liveui: true,
      lowLatency: true,
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90,
      playbackRates: [0.5, 1, 1.5, 2],
      liveTracker: true,
      plugins: {
        qualityLevels: {},
      },
    };
    // Check if the videoRef exists before initializing video.js
    if (videoRef.current) {
      const player = videojs(videoRef.current, { ...videoJsOptions });
      player.qualitySelectorHls();
    }
  }, [streamVODUrl]);

  return (
    <div className="flex flex-col w-full h-[400px] justify-center items-center relative">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin w-full h-full flex flex-col justify-center items-center rounded-xl q"
        controls
      />
    </div>
  );
};

export default UnitStreamView;
