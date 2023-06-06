/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
      port: '',
      pathname: '/alexrusselldev/alexrusselldev/blob/master/**'
    },]
    , domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
