import { Metadata, NextPage } from 'next';
import StreamPageTempalate from '@modules/stream/templates';

export const metadata: Metadata = {
  title: 'Preview Page',
  description: 'Preview Page',
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'vi-VN': '/vi-VN',
    },
  },
  openGraph: {
    images: '/image/stream-web.png',
  },
};

const StreamPage = () => {  
  return <StreamPageTempalate />;
};

export default StreamPage;
