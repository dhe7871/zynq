"use client";

import { useEffect } from "react";
import { useAppContext } from "@/lib/context"; // adjust path as needed

export default function ThemeColorManager({
    children,
}: {
    children: React.ReactNode;
}) {
    const context = useAppContext(); // assuming state.theme exists
    if (!context) throw new Error("Context can not be null...");

    const [state] = context;

    useEffect(() => {
        const metaTag =
            document.querySelector("meta[name='theme-color']") ||
            (() => {
                const m = document.createElement("meta");
                m.name = "theme-color";
                document.head.appendChild(m);
                return m;
            })();

        const color = state.isDarkTheme ? "#000000" : "#ffffff"; // customize these
        metaTag.setAttribute("content", color);
    }, [state.isDarkTheme]);

    return children;
}
