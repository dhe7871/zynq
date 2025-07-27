import type { NextConfig } from "next";
import nextPwa from "next-pwa";

const isDevEnv = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
    allowedDevOrigins: ["http://10.105.53.103:3000", "http://localhost:8000"],
};

const withPWA = nextPwa({
    dest: "public",
    register: true,
    skipWaiting: true,
});

export default isDevEnv ? nextConfig : withPWA(nextConfig);

