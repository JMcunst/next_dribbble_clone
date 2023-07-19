/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com", "task.com"],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
