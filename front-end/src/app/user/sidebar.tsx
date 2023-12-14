import { Button } from '@modules/common/components/ui/button';
import Link from 'next/link';
import React from 'react';

const UserSideBar = () => {
  const buttons = [
    {
      text: 'My Profile',
      link: '/profile',
    },
    {
      text: 'My Wallet',
      link: '/wallet',
    },
    {
      text: 'My History',
      link: '/history',
    },
    {
      text: 'Gift & Donations',
      link: '/gift',
    },
    {
      text: 'Securify & Privacy',
      link: '/privacy',
    },
    {
      text: 'Notification',
      link: '/notification',
    },
    {
      text: 'Setting',
      link: '/setting',
    },
  ];

  return (
    <section className='flex flex-col'>
      <h3 className='font-bold text-center'>Account Center</h3>
      <div className='flex flex-col'>
        {buttons.map((item, index) => (
          <Button key={index} className="flex justify-normal">
            <Link href={item.link}>{item.text}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default UserSideBar;
