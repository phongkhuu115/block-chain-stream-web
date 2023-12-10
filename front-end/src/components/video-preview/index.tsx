"use client";

import { CustomImage } from '@components/ui/image';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import videojs from 'video.js';

interface Props {
    id: string;
    image: string;
    title: string;
    viewers: number;
    tags: string[];
    channelImage: string;
    channelName: string;
    isLiveNow?: boolean;
}

const VideoPreview = ({
    tags = ["game", "music"],
    ...props
}: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            sources: [
                {
                    src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
                    type: "application/x-mpegURL",
                },
            ],
            liveui: true,
            lowLatency: true,
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90,
            liveTracker: true,
        };

        // Check if the videoRef exists before initializing video.js
        if (videoRef.current) {
            videojs(videoRef.current, { ...videoJsOptions });
        }
    }, []);


    return (
        <div className="relative p-2 cursor-pointer">
            <Link href={`/video/${props.id}`}>
                <div className='max-w-[300px]'>
                    {props.image && (
                        <Image
                            src={props.image}
                            alt="/"
                            width={300}
                            height={200}
                            className="object-cover videopreview"
                        />
                    )}

                    {/* <HoverVideoPlayer
                        videoSrc={""}
                        videoRef={videoRef}
                        pausedOverlay={
                            <Image
                                src={props.image}
                                alt=""
                                width={300}
                                height={200}
                                className="object-cover videopreview"
                            />
                        }
                        loadingOverlay={
                            <Loader className="w-10 h-10 text-white" />
                        }
                    /> */}

                    {props.isLiveNow && (
                        <div className="absolute text-xs px-1 py-0.5 font-semibold bg-red-600 rounded top-4 text-white left-4">
                            <p className="uppercase"> Live</p>
                        </div>
                    )}

                    <p className="font-bold truncate">{props.title}</p>
                    <p className="text-sm text-gray-500 py-[2px]">{props.viewers}</p>
                    <div className="flex">
                        <div>

                        </div>
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
            </Link>
        </div>
    );
};

export default VideoPreview;
