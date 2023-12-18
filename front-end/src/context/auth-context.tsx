"use client";

import { getAxiosParam } from '@lib/helpers/api';
import { notifyError, notifySuccess } from '@modules/common/components/toast-comps';
import axios from 'axios';
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
        const paramsLogin = getAxiosParam(
            process.env.NEXT_PUBLIC_API_URL + '/login',
            'POST',
            {
                username: values.username,
                password: values.user_password,
            },
            "",
            {
                withCredentials: true,
            }
        );
        try {
            console.log('paramsLogin: ', paramsLogin);
            const res = await axios.request(paramsLogin);
            if (res.status === 200) {
                console.log('res: ', res);
                notifySuccess("Login success");
                const userData = res.data.user;
                if (userData) {
                    dispatch(storeUserData(userData))
                    router.push("/")
                }
            }
        }
        catch (err: any) {
            notifyError(`Login failed ${(err?.message).toLowerCase()}`);
        }
    };

    const handleSignUp = async (values: any) => {
        const paramsSignUp = getAxiosParam(
            process.env.NEXT_PUBLIC_API_URL + '/register',
            'POST',
            {
                username: values.username,
                password: values.user_password,
                confirmed_password: values.confirm_password,
                user_email: values.user_email,
                user_fullname: values.user_fullname,
            },
            '',
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

    const handleLogout = async () => {
        const paramsLogout = getAxiosParam(
            process.env.NEXT_PUBLIC_API_URL + '/logout',
            'POST',
            {},
            '',
            {
                withCredentials: true,
            },
        );
        try {
            const res = await axios.request(paramsLogout);
            if (res.status === 200) {
                notifySuccess("Logout success");
                dispatch(storeUserData(undefined))
                router.push("/")
            }
        }
        catch (err: any) {
            notifyError(`Logout failed ${(err?.message).toLowerCase()}`);
        }
    }

    const handleUpdateProfile = async (values: any) => {
        console.log('values: ', values);
        const paramsUpdateProfile = getAxiosParam(
            process.env.NEXT_PUBLIC_API_URL + `/user/${values.user_id}`,
            'PUT',
            {
                username: values.username,
                user_fullname: values.user_fullname,
                user_email: values.user_email,
            },
            '',
            {
                withCredentials: true,
            }
        );
        try {
            const res = await axios.request(paramsUpdateProfile);
            if (res.status === 204) {
                notifySuccess("Update profile success");
                const userData = res.data.user;
                if (userData) {
                    dispatch(storeUserData(userData))
                    router.push("/")
                }
            }
        }
        catch (err: any) {
            notifyError(`Update profile failed ${(err?.message).toLowerCase()}`);
        }
    }

    return (
        <AuthContext.Provider value={{ handleLogin, handleSignUp, handleUpdateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

type AuthContextType = {
    handleLogin: (values: any) => void;
    handleSignUp: (values: any) => void;
    handleUpdateProfile: (values: any) => void;
};