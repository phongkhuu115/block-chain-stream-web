import { Metadata, NextPage } from 'next';
import PreviewPageTempalate from '@modules/preview/templates';

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

const PreviewPage: NextPage = () => {
  return <PreviewPageTempalate />;
};

export default PreviewPage;
