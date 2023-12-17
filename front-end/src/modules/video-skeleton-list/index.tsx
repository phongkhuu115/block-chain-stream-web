import VideoSkeleton from '@modules/skeleton/video-skeleton';
import React from 'react';

const VideoSkeletonList = ({ shortlist }: { shortlist?: boolean }) => {
    return (
        <>
            {[...Array(shortlist ? 4 : 25)].map((_i, index: number) => (
                <VideoSkeleton key={index} />
            ))}
        </>
    );
};

export default VideoSkeletonList;