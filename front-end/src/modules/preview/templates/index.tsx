'use client';

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
import { Input } from '@modules/common/components/ui/input';
import { Label } from '@modules/common/components/ui/label';
import { Button } from '@modules/common/components/ui/button';
import { RTMP_LINK } from '@lib/helpers/env-provider';

const PreviewPageTempalate = () => {
  const [url, setURL] = useState<string>();
  const socket = io('https://nt208-g4.site');

  const user = useSelector((state: any) => state.user.user);
  console.log(user);

  socket.on(`preview_${user.user_id}`, (url) => {
    setURL(url);
  });

  console.log(url);

  return (
    <main className='container center-item '>
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            Connect your stream application with stream key below to start
          </CardDescription>
        </CardHeader>
        <CardContent>{url && <View url={url}></View>}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Set up your live streaming software</CardTitle>
          <CardDescription>
            Copy and paste this stream key into the live streaming software
            you're using.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor='key'>Stream Key</Label>
            <Input id='key' defaultValue={user.user_id} readOnly />
          </div>
          <div>
            <Label htmlFor='rtmp'>Server URL</Label>
            <Input id='rtmp' defaultValue={RTMP_LINK} readOnly />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div>
            <Label htmlFor='name'>Title</Label>
            <Input id='name' />
          </div>
          <div>
            <Label htmlFor='thumbnail'>Thumbnail</Label>
            <Input id='thumbnail' />
          </div>
          <div>
            <Button>Return</Button>
            <Button>Go Live</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default PreviewPageTempalate;
