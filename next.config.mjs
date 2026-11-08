/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",

        
      },
    },
  },
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'img.magnific.com',
    },
  ],
},
};

export default nextConfig;
