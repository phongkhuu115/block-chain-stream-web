'use client';

import UserSideBar from './sidebar';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from '@modules/common/components/ui/card';

import Avatar from '@modules/common/components/ui/avatar';
import { useSelector } from 'react-redux';
import { Label } from '@modules/common/components/ui/label';
import { Input } from '@modules/common/components/ui/input';
import { Button } from '@modules/common/components/ui/button';

export default function UserPage() {
  const user = useSelector((state: any) => state.user.user);
  const {
    user_id,
    username,
    user_fullname,
    user_email,
    user_stream_key,
    user_avatar,
  } = user;

  return (
    <main className='flex'>
      <UserSideBar />
      <section>
        <Card className='border-0'>
          <CardHeader className='flex flex-row'>
            <Avatar
              src={
                user_avatar
                  ? user_avatar
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              }
              alt={user_fullname}></Avatar>
            <div>
              <CardTitle>{user_fullname ? user_fullname : 'Unknown'}</CardTitle>
              <CardDescription>
                {user_email ? user_email : 'Unknown'}
              </CardDescription>
              <CardDescription>
                {username ? '@' + username : 'Unknown'}
              </CardDescription>
            </div>
          </CardHeader>
          <CardDescription></CardDescription>
        </Card>
        <Card className='border-0 text-black'>
          <div className='space-y-1'>
            <Label htmlFor='username'>Username</Label>
            <div className='flex'>
              <Input id='username' placeholder={username} />
              <Button>Change</Button>
            </div>
          </div>
          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <div className='flex'>
              <Input id='email' placeholder={user_email} type='email' />
              <Button>Change</Button>
            </div>
          </div>
          <div className='space-y-1'>
            <Label htmlFor='stream-key'>Stream key</Label>
            <div className='flex'>
              <Input id='stream-key' defaultValue={user_stream_key} readOnly/>
              <Button>Change</Button>
            </div>
          </div>
          <div className='flex'>
            <Button>
              Create Channel
            </Button>
            <Button>
              Create A Stream
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
