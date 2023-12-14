'use client';

import Header from '@modules/common/components/header/header';
import Footer from '@modules/common/components/footer/footer';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
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
      <Provider store={store}>{children}</Provider>
      {pathName !== '/auth' && <Footer />}
    </>
  );
}
