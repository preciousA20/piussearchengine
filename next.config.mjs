/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.bing.com',  // Allow Bing images
        },
        {
          protocol: 'https',
          hostname: '**.githubusercontent.com',  // Allow GitHub images
        },
        {
          protocol: 'https',
          hostname: '**.dbukjj6eu5tsf.cloudfront.net'
        },
        {
          protocol: 'https',
          hostname: 'wiki.osdev.org'
        }
      ],
    },
  };
  
export default nextConfig;