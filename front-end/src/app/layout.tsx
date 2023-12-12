import { cn } from '@lib/utils';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootWrapper from '@modules/common/components/wrapper/wrapper';
export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BCSW',
  description: 'Streaming platform with crypto currencies donation supported',
  themeColor: '#0C102E',
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
      </body>
    </html>
  );
}
