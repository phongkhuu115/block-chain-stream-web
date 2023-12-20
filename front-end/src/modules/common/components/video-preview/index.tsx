
"use client";
import './index.scss';
import { Loader2, LoaderIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import videojs from 'video.js';
import { CustomImage } from '@components/ui/image';
import { abbreviateNumber } from '@lib/utils';
import useStreamDetector from '../../../../lib/hook/use-stream-detector';

type Props = {
    id: string;
    image: string;
    title: string;
    viewers: number;
    tags: string[];
    channelImage: string;
    channelName: string;
    isLiveNow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

// const video_src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
const video_src = "https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8";


const VideoPreview = ({
    tags = ["game", "music"],
    ...props
}: Props) => {

    const isLive = useStreamDetector(video_src);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoJsOptions = {
            liveui: true,
            liveTracker: true,
            autoplay: false,
            controls: true,
            sources: [
                {
                    src: video_src,
                    type: "application/x-mpegURL",
                },
            ],
            lowLatency: true,
            playbackRates: [0.5, 1, 1.5, 2],
            backBufferLength: 90,

            lowLatencyMode: true,
        };
        // Check if the videoRef exists before initializing video.js
        if (videoRef.current) {
            videojs(videoRef.current, { ...videoJsOptions }).addClass("video-js");
            const playerInstance = videojs.getPlayer(videoRef.current);
            playerInstance.on("ready", () => {
                console.log("ready");
            });
        }
    }, []);

    return (
        <div className="relative p-2 ">
            <div >
                <div className='max-w-[300px]'>
                    {videoRef && (
                        <HoverVideoPlayer
                            videoRef={videoRef}
                            videoClassName='videopreview'
                            videoSrc={props.image}
                            pausedOverlay={
                                <CustomImage
                                    src={props.image}
                                    alt="/"
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-full "
                                />

                            }
                            loadingOverlay={
                                <div className="loading-overlay flex w-full h-full justify-center items-center opacity-60 bg-black ">
                                    <Loader2 className="animate-spin text-white opacity-100" />
                                </div>
                            }
                        />
                    )}


                    {isLive && (
                        <div className="absolute text-xs px-1 py-0.5 font-semibold bg-red-600 rounded top-4 text-white left-4 z-50">
                            <p className="uppercase"> Live</p>
                        </div>
                    )}

                    <Link href={`/video/${props.id}`}>
                        <p className="font-bold truncate">{props.title}</p>
                    </Link>
                    <p className="text-sm text-gray-500 py-[2px]">{abbreviateNumber(props.viewers)} viewers</p>
                    <div className="flex">
                        <div>
                            <div className="flex items-center space-x-2">
                                {props.channelImage && (
                                    <CustomImage
                                        src={props.channelImage}
                                        alt="/"
                                        width={20}
                                        height={20}
                                        className="object-cover rounded-[50%]"
                                    />
                                )}
                                <p className="text-xs">{props.channelName}</p>
                            </div>
                            {tags?.length !== 0 && (
                                <div className='flex gap-2 mt-1'>
                                    {
                                        tags.map((tag) => (
                                            <p className="text-sm bg-gray-700 hover:bg-gray-600 rounded-full inline-block p-[2px] px-3">
                                                {tag}
                                            </p>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPreview;
