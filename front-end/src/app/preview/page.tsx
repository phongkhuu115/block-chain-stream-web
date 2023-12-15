import { Metadata, NextPage } from 'next';
import PreviewPageTempalate from '@modules/authentication/templates/preview';

export const metadata: Metadata = {
  title: 'Preview Page',
  description: 'Preview Page',
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
};

const PreviewPage: NextPage = () => {
  return <PreviewPageTempalate />;
};

export default PreviewPage;
