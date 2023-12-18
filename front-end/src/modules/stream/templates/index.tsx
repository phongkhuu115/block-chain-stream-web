'use client';

import { getAxiosParam } from '@lib/helpers/api';
import View from '@modules/stream-view/view-videojs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@modules/common/components/ui/button';
import { useAxios } from 'hooks/useAxios';
import { io } from 'socket.io-client';
import { Input } from '@modules/common/components/ui/input';

const StreamPageTempalate = ({ username }: any) => {
  const [stream, setStream] = useState<any>();
  const [message, setMessage] = useState<any>();
  const paramUserID = getAxiosParam(
    process.env.NEXT_PUBLIC_API_URL + '/users/' + username,
    'GET',
    {},
    '',
    {
      withCredentials: true,
    }
  );

  const sendChannel = `comment_${username}`;

  useEffect(() => {
    const socket = io('https://nt208-g4.site');

    socket.on(sendChannel, (args: any) => {
      console.log('chat', args);
    });
  }, []);

  const userData = useAxios(paramUserID);

  useEffect(() => {
    const paramStream = getAxiosParam(
      process.env.NEXT_PUBLIC_API_URL +
        '/streams/' +
        userData.response?.data.user_id,
      'GET',
      {},
      '',
      {
        withCredentials: true,
      }
    );

    axios.request(paramStream).then((res) => {
      if (res?.data?.stream) {
        setStream(res.data.stream);
      }
    });
  }, []);

  console.log('render');

  const handleChat = async () => {
    const paramComment = getAxiosParam(
      process.env.NEXT_PUBLIC_API_URL + '/comments/',
      'POST',
      {
        username: username,
        message: message,
      },
      '',
      {
        withCredentials: true,
      }
    );
    await axios.request(paramComment);
  };

  return (
    <main className='container center-item'>
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
      <div>
        <Input
          onChange={(e) => setMessage(e.target.value)}></Input>
        <Button onClick={handleChat}>Chat</Button>
      </div>
    </main>
  );
};

export default StreamPageTempalate;
