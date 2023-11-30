/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const path = require('path')
const nextConfig = {
  output: 'export',
  trailingSlash: true, // 빌드시 폴더 구조 그대로 생성
  assetPrefix: process.env.BASE_URL,
  basePath: process.env.BASE_URL,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
