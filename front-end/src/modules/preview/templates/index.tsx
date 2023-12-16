'use client';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import View from '@modules/stream-view/view-videojs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import { useState } from 'react';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';

const PreviewPageTempalate = () => {
  const [url, setURL] = useState<string>();
  const socket = io('https://nt208-g4.site');

  const user = useSelector((state: any) => state.user.user);
  console.log(user)

  socket.on(`preview_${user.user_id}`, (url) => {
    setURL(url)
  });

  console.log(url)

  return (
    <main className='container center-item '>
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            Connect your stream application with stream key below to start
          </CardDescription>
        </CardHeader>
        <CardContent>
          {url && <View url={url}></View>}
        </CardContent>
      </Card>
      <Card></Card>
    </main>
  );
};

export default PreviewPageTempalate;
