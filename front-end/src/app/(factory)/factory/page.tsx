import LiveChannels from "@modules/common/components/video-list";
import VideoPreview from "@modules/common/components/video-preview";
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
        "url": "https://yt3.ggpht.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s68-c-k-c0x00ffffff-no-rj",

      },
    ],
    author: {
      title: "Test",
      avatar: [
        {
          "url": "https://yt3.ggpht.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s68-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    isLiveNow: true,
  }
};

async function getContents() {
  const res = await fetch(`https://youtube138.p.rapidapi.com/search/?q=live&hl=en&gl=VN`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
      "x-rapidapi-key": "ab831ce861mshd08491a9042f0d6p14def1jsnf6a56bd43f78",
      "useQueryString": true
    }
  })
  return res.json()
}

const FactoryComponent: NextPage = async () => {
  const data = (await Promise.resolve(getContents()));

  const content = data?.contents as Content[];

  return (
    <>
      <main className="container">
        <LiveChannels videos={content.slice(0, 4)} />
        {/* <VideoPreview 
        id={content[0].video.videoId} 
        image={content[0].video.thumbnails[0].url} 
        title={content[0].video.title} 
        viewers={content[0].video.stats.viewers} 
        tags={[]} 
        channelImage={content[0].video.author.avatar[0].url} 
        channelName={content[0].video.author.title} /> */}
      </main>
    </>
  );
};

export default FactoryComponent;
