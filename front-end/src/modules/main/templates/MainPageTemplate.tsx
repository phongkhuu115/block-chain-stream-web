'use client';

import { getAxiosParam } from '@lib/helpers/api';
import { API_URL } from '@lib/helpers/env-provider';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@modules/common/components/ui/card';
import GroupMainTemplate from '@modules/stream-view/group-main';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import View from '../../stream-view/view-videojs/index';

const MainPageTemplate = () => {
  const [streams, setStreams] = useState<any>([]);
  const [follow, setFollow] = useState<any>('');

  useEffect(() => {
    let paramStream = getAxiosParam(`${API_URL}/streams`, 'GET', {}, '', {
      withCredentials: true,
    });

    axios.request(paramStream).then((res) => {
      setStreams([...res.data.streams.slice()]);
    });
  }, []);

  useEffect(() => {
    if (streams[0]) {
      let paramStream = getAxiosParam(
        `${API_URL}/follows/counts`,
        'POST',
        { user_id: streams[0]?.video_owner },
        '',
        {
          withCredentials: true,
        }
      );

      axios.request(paramStream).then((res) => {
        setFollow(res.data.followers);
      });
    }
  }, [streams[0]]);

  return (
    <main className='flex p-5 space-x-5'>
      <div className='flex-[7]'>
        <div className='h-full'>
          <a href={`/stream/${streams[0]?.Owners?.username}`}>
            {streams[0]?.video_thumbnail && (
              <Image width={100} height={100} alt='' src={streams[0]?.video_thumbnail} />
            )}
          </a>
        </div>
      </div>
      <div className='flex space-y-5 flex-[3] flex-col w-full h-full'>
        <CardHeader>
          <CardTitle>Popular</CardTitle>
        </CardHeader>
        {streams.slice(1).map((stream: any) => {
          return (
            <a className='w-full' href={`/stream/${stream.Owners.username}`}>
              <Card className='flex text-white flex-col rounded-xl shadow-xl bg-secondary border-none'>
                <CardContent className='flex w-full h-full p-2'>
                  {stream.video_thumbnail && (
                    <Image width={100} height={100} alt='' src={stream.video_thumbnail}></Image>
                  )}
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
    </main>
  );
};

export default MainPageTemplate;
