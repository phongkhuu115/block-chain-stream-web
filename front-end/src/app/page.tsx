import GroupMainTemplate from "@modules/stream-view/group-main";
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Home Page',
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


const Home: NextPage = async () => {
  return (
    <>
      <main className="flex items-center justify-center flex-row w-full h-full p-5">
        <div className="flex w-full h-full justify-between items-center">
          <div className="flex w-full h-full justify-center items-center text-center">
            <GroupMainTemplate />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;
