import favicon from 'app/favicon.ico';
import { MoreHorizontal, Share2 } from 'lucide-react';
import ViewInfomation from '../view-infomation';
import View from '../view-videojs';
import ViewersCount from '../viewer-count';
import { Button } from '@modules/common/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@modules/common/components/ui/card';

type Props = {};

const StreamData = {
  user: {
    username: 'Domixoooooo',
    bio: "I'm a streamer",
    followersCount: 10,
    imageSrc: favicon,
  },
  stream: {
    title: 'ChessTV - 24/7 Streaming Of Chess Tournaments',
    viewersCount: 12,
  },
};

const GroupMainTemplate = (props: Props) => {
  return (
    <Card className='flex flex-col rounded-xl shadow-xl bg-secondary border-none'>
      <CardContent className='flex w-full h-full items-center justify-center p-2'>
        <View url='https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8' />
      </CardContent>
      <CardFooter className='mt-[2.5em] flex flex-col justify-start items-start'>
        <h2 className='stream-watch-metadata font-bold text-[20px] text-left'>
          {StreamData.stream.title}
        </h2>

        <div className='flex flex-row items-center w-full pt-2'>
          <div className='flex flex-row  items-center w-full h-full justify-center '>
            <ViewInfomation
              className='flex items-center w-full h-full justify-center'
              username={StreamData.user.username}
              bio="I'm a streamer"
              imageSrc={favicon}
              followersCount={StreamData.user.followersCount}
            />
            <Button
              variant={'outline'}
              className='bg-beta rounded-full border-none'>
              <p className='font-bold px-2'>Follow</p>
            </Button>
          </div>

          <div className='flex flex-row justify-end gap-4 w-full'>
            <ViewersCount viewerCount={StreamData.stream.viewersCount} />
            <Share2 size={25} />
            <MoreHorizontal size={25} strokeWidth={3} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GroupMainTemplate;
