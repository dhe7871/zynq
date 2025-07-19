import type { Metadata } from "next";
import {
    // Inter,
    // Raleway,
    // Edu_AU_VIC_WA_NT_Hand,
    Montserrat,
} from "next/font/google";
import "./globals.css";
import ContextWrapper from "./ContextWrapper";
import Header from "@/components/Header/Header";

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
        icon: "/logo_dark.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="dark">
            <body className={mont.className}>
                <ContextWrapper>
                    <Header />
                    {children}
                </ContextWrapper>
            </body>
        </html>
    );
}
