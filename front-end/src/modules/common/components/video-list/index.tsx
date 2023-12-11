import VideoSkeletonList from "@components/skeleton/video-skeleton-list";
import VideoPreview from "@components/video-preview";
import "./index.scss";

const LiveChannels = ({ videos: contents }: { videos: Content[] }) => {
    return (
        <div className="px-4">
            <h2 className="text-base font-bold text-gray-200 md:text-xl">
                Live Channels we think you&apos;ll like
            </h2>

            <div className="grid grid-cols-1 gap-3 pt-3 medium:grid-cols-3 large:grid-cols-4">
                {contents?.length === 0 ? (<VideoSkeletonList shortlist />)
                    : (
                        <>
                            {
                                contents &&
                                contents.map((content, index: number) => (
                                    <VideoPreview
                                        id={content.video?.videoId}
                                        image={content.video?.thumbnails[0]?.url}
                                        title={content.video?.title}
                                        viewers={content.video.stats.viewers}
                                        channelImage={content.video?.author?.avatar[0].url}
                                        channelName={content.video?.author?.title}
                                        key={index}
                                        tags={[]}
                                    />
                                ))
                            }
                        </>
                    )}
            </div>
        </div>
    );
};

export default LiveChannels;