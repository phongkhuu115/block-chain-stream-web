'use client';

import { Button } from '@components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { AspectRatio } from '@components/ui/aspect-ratio';
import { Checkbox } from '@components/ui/checkbox';
import Image from 'next/image';
import authPic from '../public/auth-pic.png';
import Link from 'next/link';
import { useState } from 'react';
import { getAxiosParam } from 'helpers/api';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { storeUserData } from 'redux/slices/userSlices';
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullname] = useState('');
  const dispatch = useDispatch();
  const router = useRouter()

  let baseURL = 'https://nt208-g4.site/v1/api';

  let paramsLogin = getAxiosParam(
    baseURL + '/login',
    '',
    {
      username: username,
      password: password,
    },
    {
      withCredentials: true,
    }
  );
  let handleLogin = async () => {
    let res = await axios.request(paramsLogin);
    if (res.status === 200) {
      let userData = res.data.user;
      if (userData) {
        dispatch(storeUserData(userData))
        router.push("/")
      }
    }
  };

  return (
    <main className='bg-primary flex'>
      <Tabs defaultValue='login' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='login'>Login</TabsTrigger>
          <TabsTrigger value='signup'>Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value='login'>
          <Card>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='username'>Username</Label>
                <Input
                  id='username'
                  placeholder='fkmdev115'
                  onChange={(e) => setUsername(e.target.value)}
                  className='text-black'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='password'>password</Label>
                <Input
                  id='password'
                  placeholder='••••••••••••'
                  onChange={(e) => setPassword(e.target.value)}
                  className='text-black'
                />
              </div>
              <CardDescription>
                <Link href='/'>Forgot password?</Link>
              </CardDescription>
              <div className='flex items-center space-x-2'>
                <Checkbox id='remember' />
                <label
                  htmlFor='terms'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Remember me
                </label>
              </div>
              <Button onClick={handleLogin}>Login</Button>
            </CardContent>
            <CardFooter>
              <div className='relative flex py-5 items-center w-full'>
                <div className='flex-grow border-t border-white'></div>
                <span className='flex-shrink mx-4 text-white'>
                  Or Login With
                </span>
                <div className='flex-grow border-t border-white'></div>
              </div>
              {/* Google, etc button */}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='signup'>
          <Card>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='username'>Username</Label>
                <Input
                  id='username'
                  placeholder='fkmdev115'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='password'>password</Label>
                <Input
                  id='password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='confirm'>Confirm password</Label>
                <Input
                  id='confirm'
                  type='password'
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>Email</Label>
                <Input
                  type='email'
                  id='username'
                  placeholder='fkmdev115@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='fullname'>Full Name</Label>
                <Input
                  id='fullname'
                  placeholder='Khuu Minh Phong'
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='remember' />
                <label
                  htmlFor='terms'
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  I agree to all the Terms and Privacy policy.
                </label>
              </div>
              <Button>Sign up</Button>
            </CardContent>
            <CardFooter>
              <div className='relative flex py-5 items-center w-full'>
                <div className='flex-grow border-t border-white'></div>
                <span className='flex-shrink mx-4 text-white'>
                  Or Login With
                </span>
                <div className='flex-grow border-t border-white'></div>
              </div>
              {/* Google, etc button */}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <AspectRatio className=''>
        <Image src={authPic} alt='authpic' fill className='rounded-md' />
      </AspectRatio>
    </main>
  );
}
