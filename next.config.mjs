import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
  const withVanillaExtract = createVanillaExtractPlugin();
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
      ],
    },
  };
  
  export default withVanillaExtract(nextConfig);
