"use client";

import Avatar from '@modules/common/components/ui/avatar';
import { Button } from '@modules/common/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@modules/common/components/ui/card';
import { Input } from '@modules/common/components/ui/input';
import { Label } from '@modules/common/components/ui/label';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AlertLogin from '../alert-login';

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

    return (
        <main className='profile__page container center-item text-white min-h-[90vh]'>
            {/* <UserSideBar /> */}
            <section>
                {
                    user_id ?
                        (
                            <Card className='m-4 bg-papaya-whip'>
                                <CardHeader className='flex flex-row'>
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

                                <CardContent>
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
                                            <Input id='stream-key' defaultValue={user_stream_key} readOnly />
                                            <Button>Change</Button>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <Button>Create Channel</Button>
                                        <Button>
                                            <Link href={'/preview'}>Create A Stream</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                        :
                        (
                            <AlertLogin />
                        )
                }
            </section>
        </main>
    );
}


export default ProfilePageTemplate;