/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'via.placeholder.com', 'cdn.builder.io', 'i1.sndcdn.com'],
    },

}

module.exports = nextConfig
