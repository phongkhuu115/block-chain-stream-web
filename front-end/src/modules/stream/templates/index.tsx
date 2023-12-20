'use client';

import { getAxiosParam } from '@lib/helpers/api';
import { Button } from '@modules/common/components/ui/button';
import SkeletonLeftSideBar from '@modules/skeletons/skeleton-left-side-bar';
import View from '@modules/stream-view/view-videojs';
import axios from 'axios';
import { useAxios } from 'hooks/useAxios';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChatBox from '../chat-box';
import VideoSkeleton from '@modules/skeletons/skeleton-video';

type myParams = {
  slug: string;
} & Params;

const StreamPageTempalate = () => {
  const params: myParams = useParams();
  const username = params.slug;
  const [stream, setStream] = useState<any>();

  const paramUserID = getAxiosParam(
    process.env.NEXT_PUBLIC_API_URL + '/users/' + username,
    'GET',
    {},
    '',
    {
      withCredentials: true,
    }
  );

  const streamer = useAxios(paramUserID);

  // useEffect(() => {
  //   const paramStream = getAxiosParam(
  //     process.env.NEXT_PUBLIC_API_URL +
  //     '/streams/' +
  //     streamer.response?.data.user_id,
  //     'GET',
  //     {},
  //     '',
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   axios.request(paramStream).then((res) => {
  //     if (res?.data?.stream) {
  //       setStream(res.data.stream);
  //     }
  //   });
  // }, []);


  return (
    <main className='container h-screen center-item  flex relative overflow-hidden p-3 gap-2'>

      <div className='basis-1/5 h-full'>
        <SkeletonLeftSideBar className='h-full w-full' />
      </div>

      <div className='basis-3/5 h-full'>
        {
          stream?.video_urls ?
            <div>
              <div>
                <View url={stream?.video_urls}></View>

              </div>
              <div>
                <div>Stream title: {stream?.video_name}</div>
                <div>Username: {stream?.Owners.username}</div>
                <div>Avatar: {stream?.Owners.user_avatar}</div>
              </div>
              <div>
                <Button>Like</Button>
                <Button>Share</Button>
              </div>
            </div>
            :
            <VideoSkeleton className='h-full' />
        }
      </div>

      <div className='basis-1/5 h-full'>
        <ChatBox username={username} />
      </div>
    </main>
  );
};

export default StreamPageTempalate;
