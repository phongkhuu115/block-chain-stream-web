'use client';

import Footer from '@modules/common/components/footer/footer';
import Header from '@modules/common/components/header/header';
import Providers from '@modules/providers';
import { usePathname } from 'next/navigation';


export default function RootWrapper({ children, }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <Providers>
      <Header />
      {children}
      {pathName !== '/auth' && <Footer />}
    </Providers>

  );
}
