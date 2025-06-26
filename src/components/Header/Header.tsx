"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Header.css";
import SunOutlined from "@/icons/SunOutlined";
import MoonOutlined from "@/icons/MoonOutlined";

export default function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const htmlDocument = document.documentElement;
        const darkBrowserTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        htmlDocument.setAttribute(
            "data-theme",
            darkBrowserTheme ? "dark" : "light"
        );
        setIsDark(darkBrowserTheme);
    }, []);

    const toggleTheme = () => {
        const htmlDocument = document.documentElement;
        htmlDocument.setAttribute("data-theme", isDark ? "dark" : "light");
        htmlDocument.setAttribute("data-theme", isDark ? "light" : "dark");
        setIsDark(!isDark);
    };

    return (
        <header>
            <Image
                src={isDark ? "/logo_dark.png" : "/logo_light.png"}
                alt="logo"
                className="img"
                width={150}
                height={200}
                priority={true}
            />
            <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-btn"
                style={{ position: "relative" }}
            >
                <SunOutlined
                    width={30}
                    height={30}
                    className="sun-btn"
                    style={{
                        opacity: isDark ? "1" : "0",
                        visibility: isDark ? "visible" : "hidden",
                        zIndex: isDark ? "10" : "9",
                    }}
                />
                <MoonOutlined
                    width={30}
                    height={30}
                    className="moon-btn"
                    style={{
                        position: "absolute",
                        top: "0",
                        opacity: isDark ? "0" : "1",
                        visibility: isDark ? "hidden" : "visible",
                        zIndex: isDark ? "9" : "10",
                    }}
                />
            </button>
        </header>
    );
}
