import VideoPreview from "@components/video-preview";
import GroupMainTemplate from "@modules/stream-view/group-main";
import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Zizi Factory component",
  description: "Generated component next app",
  themeColor: "#0C102E",
};

const video = {
  video: {
    videoId: "1",
    title: "Test",
    thumbnails: [
      {
        url: "https://i.ytimg.com/vi/1/0.jpg",
      },
    ],
    author: {
      title: "Test",
      avatar: [
        {
          url: "https://i.ytimg.com/vi/1/0.jpg",
        },
      ],
    },
    isLiveNow: true,
  }
};

const FactoryComponent: NextPage = () => {
  return (
    <>
      <main className="container">
        <VideoPreview
          id={video.video?.videoId}
          image={video.video?.thumbnails[0]?.url}
          title={video.video?.title}
          viewers={''}
          channelImage={video.video?.author?.avatar[0].url}
          channelName={video.video?.author?.title}
          tag1={''}
          isLiveNow={video.video?.isLiveNow}
        />
      </main>
    </>
  );
};

export default FactoryComponent;
