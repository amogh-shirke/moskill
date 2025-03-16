/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "i.ytimg.com", "yt3.ggpht.com"], // Allow YouTube thumbnails
  },
};

export default nextConfig;
