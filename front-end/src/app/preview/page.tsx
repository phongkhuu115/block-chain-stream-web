import { Metadata, NextPage } from 'next';
import { useState } from 'react';

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

const AuthPage: NextPage = () => {
  const [url, setURL] = useState<string>('');

  return <>
    
  </>;
};

export default AuthPage;
