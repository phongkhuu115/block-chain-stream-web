"use client"

import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
import Login from "../login"
import SignUp from "../sign-up"
import Image from 'next/image';
import authPic from '@public/auth-pic.png';

const AuthenticationPageTempalate = () => {
    return (
        <main className='container center-item '>
            <Tabs defaultValue='login' className='w-[400px] bg-gradient-to-r from-alpha to-primary  p-5 pt-0 rounded-3xl'>
                <TabsList className='grid w-full grid-cols-2'>
                    <TabsTrigger value='login'>Login</TabsTrigger>
                    <TabsTrigger value='signup'>Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value='login' className='login__tab'>
                    <Login />
                </TabsContent>

                <TabsContent value='signup' className='signup__tab'>
                    <SignUp />
                </TabsContent>
            </Tabs>
            <div className='invisible medium:visible'>
                <AspectRatio className='w-full h-full'>
                    <Image src={authPic} alt='authpic' className='rounded-md object-cover' />
                </AspectRatio>
            </div>
        </main>
    )
}

export default AuthenticationPageTempalate