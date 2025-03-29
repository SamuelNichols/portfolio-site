/** @type {import('next').NextConfig} */
// Configuration for Next.js static export and GitHub Pages deployment
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
