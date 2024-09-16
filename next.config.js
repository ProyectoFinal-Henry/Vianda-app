/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*", // This applies the header to all routes
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // Adjusting COOP to allow popups
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp", // Optional for added security
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig;
