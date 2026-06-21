import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The live site uses trailing-slash routes (/tarifs/, /securite/, ...).
  // Preserve that URL shape so the redesign keeps the same canonical paths.
  trailingSlash: true,
};

export default nextConfig;
