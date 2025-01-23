import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio.vmotta.dev',
        port: '',
        pathname: '/portfolio-vmotta/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
