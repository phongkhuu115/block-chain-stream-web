"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import clsx from "clsx"
import { useAuth } from "context/auth-context"
import { useRouter } from "next/navigation"
import Login from "../login"
import SignUp from "../sign-up"
import "./index.scss"

const AuthenticationPageTempalate = () => {
    const router = useRouter();
    const { user } = useAuth();

    if (user.user_id) {
        router.push('/')
        return <></>
    }

    return (
        <main className='container h-[100vh] center-item'>
            <video src="/images/shadergradient7.webm" autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
            <Tabs defaultValue='login' className='w-[80vw] shadow-2xl medium:w-[400px] bg-secondary scale-[85%] rounded-3xl transition-all' aria-label="Login/Register your account">
                <TabsList className='flex justify-between items-center w-full text-white'>
                    <TabsTrigger className={clsx("w-full", "rounded-tl-3xl tab-trigger")} value='login'>Login</TabsTrigger>
                    <TabsTrigger className={clsx("w-full", "rounded-tr-3xl tab-trigger")} value='signup'>Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value='login' className='login__tab'>
                    <Login />
                </TabsContent>

                <TabsContent value='signup' className='signup__tab '>
                    <SignUp />
                </TabsContent>
            </Tabs>

        </main >

    )
};


export default AuthenticationPageTempalate