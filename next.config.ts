import type { NextConfig } from "next";
import nextPwa from "next-pwa";

const isDevEnv = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
    /* config options here */
    // images: {
    //     domains: ["picsum.photos"],
    // },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
};

const withPWA = nextPwa({
    dest: "public",
    register: true,
    skipWaiting: true,
});

export default isDevEnv ? nextConfig : withPWA(nextConfig);
