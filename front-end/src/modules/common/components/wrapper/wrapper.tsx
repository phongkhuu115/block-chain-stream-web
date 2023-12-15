'use client';

import Footer from '@modules/common/components/footer/footer';
import Header from '@modules/common/components/header/header';
import Providers from '@modules/providers';
import { usePathname } from 'next/navigation';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../../../redux/store';

export default function RootWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <ReduxProvider store={store}>
      <Providers>
        <Header />
        {children}
        {pathName !== '/auth' && <Footer />}
      </Providers>
    </ReduxProvider>
  );
}
