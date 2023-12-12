'use client';

import Header from '@modules/common/components/header/header';
import Footer from '@modules/common/components/footer/footer';
import { usePathname } from 'next/navigation';

export default function RootWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <Header />
      {children}
      {pathName !== '/login' && pathName !== '/register' && <Footer />}
    </>
  );
}
