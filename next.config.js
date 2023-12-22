/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "media.graphassets.com"],
  },
  redirects: async () => {
    return [
      ...["/menu", "/SecondaryPage", "/contactus"].map((source) => ({
        source,
        destination: "/",
        permanent: true,
      })),
    ];
  },
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
};

module.exports = nextConfig;
