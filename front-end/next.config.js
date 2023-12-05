/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['localhost', 'via.placeholder.com', 'cdn.builder.io', 'i1.sndcdn.com'],
    },
    publicRuntimeConfig:
    {
        public_stream_server: process.env.PUBLIC_STREAM_SERVER,
    }

}

console.log('nextConfig: ', nextConfig);
module.exports = nextConfig
