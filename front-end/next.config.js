/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: [
            "@medusajs/product",
            "@medusajs/modules-sdk",
        ],
    },
    reactStrictMode: false,
    publicRuntimeConfig:
    {
        public_stream_server: process.env.PUBLIC_STREAM_SERVER,
    },
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        domains: ['localhost', 'via.placeholder.com', 'cdn.builder.io', 'i1.sndcdn.com', "i.ytimg.com", "yt3.ggpht.com"],
    },
}

console.log('nextConfig: ', nextConfig);
module.exports = nextConfig
