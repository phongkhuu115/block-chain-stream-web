"use client";

import axios from 'axios';
import { getAxiosParam } from 'helpers/api';
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
    handleAuth: (values: any) => void;
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
    const baseURL = 'https://nt208-g4.site/v1/api';
    const dispatch = useDispatch();
    const router = useRouter()

    const handleAuth = async (values: any) => {
        const paramsLogin = getAxiosParam(
            baseURL + '/login',
            '',
            {
                username: values.username,
                password: values.user_password,
            },
            {
                withCredentials: true,
            }
        );
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
        <AuthContext.Provider value={{ handleAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

