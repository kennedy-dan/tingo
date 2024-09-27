/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "_next",
  reactStrictMode: true,
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table", "react-icons" ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.vendloop.com',
      },
    ],
  },
};

export default nextConfig;
