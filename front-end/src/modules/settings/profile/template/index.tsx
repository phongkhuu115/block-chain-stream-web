"use client";

import { LoginSchema, UpdateSchema } from '@lib/constant/validation';
import { FormikInput } from '@modules/authentication/formik-comps';
import Avatar from '@modules/common/components/ui/avatar';
import { Button } from '@modules/common/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@modules/common/components/ui/card';
import { useAuth } from 'context/auth-context';
import { ConnectedFocusError } from 'focus-formik-error';
import { Field, Form, Formik } from 'formik';
import { Loader2Icon, RotateCw } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import AlertLogin from '../alert-login';


const isDifferent = (obj1: any, obj2: any) => {
    const smaller = Object.keys(obj1).length < Object.keys(obj2).length ? obj1 : obj2;
    for (let key in smaller) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

const ProfilePageTemplate = () => {
    const user = useSelector((state: any) => state.user.user);
    const {
        user_id,
        username,
        user_fullname,
        user_email,
        user_stream_key,
        user_avatar,
    } = user;

    const initUpdateProfile = {
        user_id: user_id,
        username: username,
        user_fullname: user_fullname,
        user_email: user_email,
    };

    const { handleUpdateProfile } = useAuth();
    const [isChangeable, setIsChangeable] = React.useState(false);

    return (
        <main className='profile__page container center-item h-[90vh]'>
            {/* <UserSideBar /> */}
            <section>
                {
                    user_id ?
                        (
                            <Card className='m-4 bg-ash-gray shadow-2xl'>

                                <CardHeader className='flex flex-row center-item gap-3'>
                                    <Avatar
                                        src={user_avatar ? user_avatar : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                                        alt={user_fullname}>
                                    </Avatar>

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

                                <Formik
                                    initialValues={initUpdateProfile}
                                    onSubmit={(values) => handleUpdateProfile(values)}
                                    validationSchema={UpdateSchema}
                                >
                                    {({ submitForm, isSubmitting, dirty, resetForm }) =>
                                    (
                                        <CardContent className='flex flex-col'>
                                            <ConnectedFocusError />
                                            <Form onKeyDown={(e) => { if (e.key === 'Enter') { submitForm(); } }}>
                                                <div>
                                                    <Field
                                                        disabled={!isChangeable}
                                                        label="Username"
                                                        name="username"
                                                        className="rounded-2xl"
                                                        autoComplete="username"
                                                        component={FormikInput} />
                                                </div>
                                                <div>
                                                    <Field
                                                        disabled={!isChangeable}
                                                        label="Fullname"
                                                        name="user_fullname"
                                                        className="rounded-2xl"
                                                        autoComplete="fullname"
                                                        component={FormikInput} />
                                                </div>

                                                <div>
                                                    <Field
                                                        disabled={!isChangeable}
                                                        label="Email"
                                                        name="user_email"
                                                        className="rounded-2xl"
                                                        autoComplete="email"
                                                        component={FormikInput} />
                                                </div>

                                                <div className=''>
                                                    <Field
                                                        readOnly
                                                        disabled
                                                        isCopyable={true}
                                                        label="Stream Key"
                                                        name="user_stream_key"
                                                        className="rounded-2xl w-full flex flex-col"
                                                        autoComplete="stream_key"
                                                        component={FormikInput}
                                                        value={user_stream_key} />
                                                </div>
                                                <div className='flex gap-2 w-full flex-col text-white'>

                                                    <div className='flex gap-2 w-full'>
                                                        <Button disabled={isSubmitting} className='w-full' onClick={
                                                            (e) => {
                                                                e.preventDefault();
                                                                if (dirty) {
                                                                    submitForm();
                                                                    setIsChangeable(false);
                                                                }
                                                                else
                                                                    if (isChangeable) {
                                                                        setIsChangeable(false);
                                                                    } else {
                                                                        setIsChangeable(true);
                                                                    }
                                                            }

                                                        }>
                                                            {
                                                                isSubmitting
                                                                    ?
                                                                    <Loader2Icon className="animate-spin duration-100" />
                                                                    :
                                                                    (isChangeable ? (dirty ? 'Update Profile' : 'Cancel') : 'Update')
                                                            }
                                                        </Button>

                                                        <Button
                                                            disabled={!dirty}
                                                            onClick={() => resetForm()}>
                                                            <RotateCw />
                                                        </Button>
                                                    </div>


                                                    <div className='flex gap-2'>
                                                        <Button>Create Channel</Button>
                                                        <Button>
                                                            <Link href={'/preview'}>Create A Stream</Link>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </CardContent>
                                    )}
                                </Formik>
                            </Card>
                        )
                        :
                        (
                            <AlertLogin />
                        )
                }
            </section>
        </main >
    );
}


export default ProfilePageTemplate;