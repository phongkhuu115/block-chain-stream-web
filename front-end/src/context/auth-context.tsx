"use client";

import { notifyError, notifySuccess } from '@modules/common/components/toast-comps';
import axios from 'axios';
import { getAxiosParam } from '@lib/helpers/api';
import { url } from 'inspector';
import { useRouter } from 'next/navigation';
import { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { storeUserData } from 'redux/slices/userSlices';

export type User = {
    user_id: string,
    username: string,
    user_fullname: string,
    user_email: string,
    user_stream_key: string,
    user_avatar: string,
    user_role: "3",
} | undefined;

type AuthContextType = {
    handleLogin: (values: any) => void;
    handleSignUp: (values: any) => void;
};

interface AccountProviderProps {
    children?: React.ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};


export const AuthProvider = ({ children }: AccountProviderProps) => {
    const dispatch = useDispatch();
    const router = useRouter()


    const handleLogin = async (values: any) => {
        console.log('values: ', values);

        const paramsLogin = getAxiosParam(
            process.env.NEXT_PUBLIC_API_URL + '/login',
            '',
            {
                username: values.username,
                password: values.user_password,
            },
            {
                withCredentials: true,
            }
        );
        try {
            const res = await axios.request(paramsLogin);
            if (res.status === 200) {
                notifySuccess("Login success");
                const userData = res.data.user;
                if (userData) {
                    dispatch(storeUserData(userData))
                    router.push("/")
                }
            }
        }
        catch (err) {
            notifyError("Login failed");
        }
    };

    const handleSignUp = async (values: any) => {
        const paramsSignUp = getAxiosParam(
            process.env.NEXT_PUBLIC_API_URL + '/register',
            '',
            {
                username: values.username,
                password: values.user_password,
                confirmed_password: values.confirm_password,
                user_email: values.user_email,
                user_fullname: values.user_fullname,
            },
            {
                withCredentials: true,
            }
        );
        try {
            const res = await axios.request(paramsSignUp);
            if (res.status === 201) {
                notifySuccess(`Welcome to the club!}`);
                const userData = res.data.user;
                if (userData) {
                    dispatch(storeUserData(userData))
                    router.push("/")
                }
            }
        }
        catch (err: any) {
            console.log('err: ', err);
            notifyError(`Sign up failed \n ${err?.response.data.message.name}`);
        }
    };

    return (
        <AuthContext.Provider value={{ handleLogin, handleSignUp }}>
            {children}
        </AuthContext.Provider>
    );
};

