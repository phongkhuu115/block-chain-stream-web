import StreamPageTempalate from '@modules/stream/templates';
import { Metadata } from 'next';
import { API_URL } from '../../../lib/helpers/env-provider';

export const dynamicParams = false // true | false,
export const dynamic = 'force-static'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function generateStaticParams() {

  const rawData = await fetch(`${API_URL}/users/usernames`);

  const streams: { users: string[] } = await rawData.json();

  const paths = streams.users.map((username) => (
    {
      params: {
        slug: username,
      },
    }
  ));

  return paths;
}

export const metadata: Metadata = {
  title: 'Stream Page',
  description: 'Stream Page',
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

const StreamPage = ({ params }: { params: { slug: string } }) => {
  return <StreamPageTempalate username={params.slug} />;
};


// const StreamPage = (slug: string) => {
//   return <StreamPageTempalate username={slug} />;
// };

export default StreamPage;
