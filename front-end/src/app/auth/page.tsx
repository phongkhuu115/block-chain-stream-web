import AuthenticationPageTempalate from '@modules/authentication/templates';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Auth Page',
  description: 'Auth Page',
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
}


const AuthPage: NextPage = () => {
  return <AuthenticationPageTempalate />
}

export default AuthPage;
