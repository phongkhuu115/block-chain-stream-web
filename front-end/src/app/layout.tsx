import { cn } from '@lib/utils';
import RootWrapper from '@modules/common/components/wrapper/wrapper';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';
export const inter = Inter({ subsets: ['latin'] });
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'BCSW',
  description: 'Streaming platform with crypto currencies donation supported',
  themeColor: '#0C102E',
  icons: {
    icon: './favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative bg-primary',
          inter.className
        )}>
        <RootWrapper>
          {children}
        </RootWrapper>
        <ToastContainer position="bottom-right" newestOnTop />
      </body>
    </html>
  );
}
