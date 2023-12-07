import { Skeleton } from '@components/ui/skeleton';
import React from 'react';

interface Props {
    isFullPage?: boolean;
}

const VideoSkeleton = ({ isFullPage }: Props) => {
    return (
        <div className="w-full">
            <Skeleton className='w-full h-[200px]' />
        </div>
    );
};

export default VideoSkeleton;
