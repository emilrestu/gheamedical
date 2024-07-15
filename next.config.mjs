/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    reactStrictMode: true,
    transpilePackages: ['antd', '@ant-design/icons', '@ant-design/icons-svg', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-tree', 'rc-table'],
    // images: { unoptimized: true },
};

export default nextConfig;
