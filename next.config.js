/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// 배포시 prefix
const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://lck-fantasy.github.io/frontend/'
    : ''
const path = require('path')
const nextConfig = {
  trailingSlash: true, // 빌드시 폴더 구조 그대로 생성
  assetPrefix: prefix,
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

// module.exports = withBundleAnalyzer(nextConfig)

// 배포시 output = 'export' 옵션 설정
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
}

module.exports = nextConfig
