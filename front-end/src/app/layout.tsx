import { cn } from '@lib/utils';
import Footer from '@modules/common/components/footer/footer';
import Header from '@modules/common/components/header/header';
import RootWrapper from '@modules/common/components/wrapper/wrapper';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientLayout from './ClientLayout';
import './globals.css';
export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BCSW',
  description: 'Streaming platform with crypto currencies donation supported',
  themeColor: '#0C102E',
  icons: {
    icon: './favicon.ico', // /public path
  },
};

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative bg-primary',
          inter.className
        )}>
        <RootWrapper>
          <Header />
          <ClientLayout {...props} />
        </RootWrapper>
        <ToastContainer position="bottom-right" newestOnTop />
      </body>
    </html>
  );
}
