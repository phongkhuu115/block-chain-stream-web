'use client';
import UserSideBar from '@modules/settings/profile/side-bar';
import clsx from 'clsx';
import { useAuth } from 'context/auth-context';
import ProfileUpdate from '../profile-update/index';


const ProfilePageTemplate = () => {
    const { user } = useAuth();
    return (
        <main className='profile__page flex container center-item h-screen w-full'>
            <video src="/images/shadergradient6.webm" autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
            {
                user.user_id && (
                    <div className='basis-1/4 h-full'>
                        <UserSideBar />
                    </div>
                )
            }
            <div className={clsx('h-full center-item', { "basis-3/4 ": user.user_id })}>
                <ProfileUpdate />
            </div>
        </main >
    );
}


export default ProfilePageTemplate;
