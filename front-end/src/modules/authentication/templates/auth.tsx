"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import clsx from "clsx"
import Login from "../login"
import SignUp from "../sign-up"
import "./index.scss"

const AuthenticationPageTempalate = () => {

    return (
        <main className='container center-item h-[90vh] '>
            <Tabs defaultValue='login' className='w-[80vw] medium:w-[400px] bg-secondary rounded-3xl transition-all' aria-label="Login your account">
                <TabsList className='flex justify-between items-center w-full'>
                    <TabsTrigger className={clsx("w-full", "rounded-tl-3xl tab-trigger")} value='login'>Login</TabsTrigger>
                    <TabsTrigger className={clsx("w-full", "rounded-tr-3xl tab-trigger")} value='signup'>Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value='login' className='login__tab '>
                    <Login />
                </TabsContent>

                <TabsContent value='signup' className='signup__tab '>
                    <SignUp />
                </TabsContent>
            </Tabs>
            {/* <div className='invisible medium:visible'>
                    <AspectRatio className='w-full h-full'>
                        <Image src={authPic} alt='authpic' className='rounded-md object-cover' />
                    </AspectRatio>
                </div> */}

        </main >

    )
};


export default AuthenticationPageTempalate