import type { Metadata } from "next";
import {
    // Inter,
    // Raleway,
    // Edu_AU_VIC_WA_NT_Hand,
    Montserrat,
} from "next/font/google";
import "./globals.css";
import AppContextWrapper from "../lib/AppContextWrapper";
import Header from "@/components/Header/Header";
import ThemeColorManager from "@/utils/ThemeColorManager";

// const raleway = Raleway({
//     subsets: ["latin"],
// });
// const inter = Inter({
//     subsets: ["latin"],
//     weight: ["500"],
// });
// const edu = Edu_AU_VIC_WA_NT_Hand({
//     subsets: ["latin"],
//     weight: ["400", "600"],
// });
const mont = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: "Zynq - The messaging App",
    description: "This is the next generation chatting app.",
    icons: {
        icon: [
            { url: "/logo_dark.png", type: "image/png" },
            { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
    },
    manifest: "/manifest.json",
};

export const viewport = {
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="dark">
            <body className={mont.className}>
                <AppContextWrapper>
                    <ThemeColorManager>
                        <Header />
                        {children}
                    </ThemeColorManager>
                </AppContextWrapper>
            </body>
        </html>
    );
}
