// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };
// module.exports = {
//   reactStrictMode: true,
//   optimizeFonts: true, // Ensures font optimization and prevents layout shift
// };

// export default nextConfig;




// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  optimizeFonts: true, // ✅ Ensures font optimization and prevents layout shift
  experimental: {
    optimizeCss: true, // ✅ Optional: optimize critical CSS for App Router
  },
};

export default nextConfig;
