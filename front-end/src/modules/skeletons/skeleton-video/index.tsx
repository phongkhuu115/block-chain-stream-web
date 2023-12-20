import { Skeleton } from '@components/ui/skeleton';
import clsx from 'clsx';
import React from 'react';


type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const VideoSkeleton = ({ className, ...props }: Props) => {
    return (
        <div className={clsx("w-full", className)}>
            <Skeleton className='w-full h-full min-h-[200px]' />
        </div>
    );
};

export default VideoSkeleton;
