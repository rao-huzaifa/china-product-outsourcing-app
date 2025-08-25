module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  
  // Add rewrites for subdomain routing
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/[[...tool]]/:path*',
      },
    ]
  },
}