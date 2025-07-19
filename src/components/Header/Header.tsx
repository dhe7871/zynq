"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./Header.css";
import SunOutlined from "@/icons/SunOutlined";
import MoonOutlined from "@/icons/MoonOutlined";
import ArrowLeftOutlined from "@/icons/ArrowLeftOutlined";
import { useAppContext } from "@/lib/context";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";

export default function Header() {
    const isSmallScr = useIsMobile();
    const context = useAppContext();

    if (!context) throw new Error("context can not be null");
    const [state, dispatch] = context;

    const router = useRouter();

    useEffect(() => {
        const htmlDocument = document.documentElement;
        const darkBrowserTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        htmlDocument.setAttribute(
            "data-theme",
            darkBrowserTheme ? "dark" : "light"
        );
        dispatch({
            type: "SET_IS_DARK_THEME",
            payload: { isDark: darkBrowserTheme },
        });
    }, []);

    const toggleTheme = () => {
        const htmlDocument = document.documentElement;
        htmlDocument.setAttribute(
            "data-theme",
            state.isDarkTheme ? "dark" : "light"
        );
        htmlDocument.setAttribute(
            "data-theme",
            state.isDarkTheme ? "light" : "dark"
        );
        dispatch({
            type: "SET_IS_DARK_THEME",
            payload: { isDark: !state.isDarkTheme },
        });
    };

    const handleBackNav = () => {
        if (isSmallScr && state.isChatRoomVisibleSM) {
            dispatch({
                type: "SET_CHATROOM_VISIBILITY_SM",
                payload: { isVisibleSM: false },
            });
            console.log("backing");
            router.push("/home");
        }
    };

    const handleHomeNav = () => {
        if (state.isChatRoomVisibleSM) {
            dispatch({
                type: "SET_CHATROOM_VISIBILITY_SM",
                payload: { isVisibleSM: false },
            });
        }
        console.log("backing");
        window.location.href = "/home";
        // router.push("/home/chat")
    };

    return (
        <header>
            <div className="flex justify-between items-center">
                <ArrowLeftOutlined
                    width={30}
                    height={30}
                    fill="var(--text-muted)"
                    stroke="var(--text-muted)"
                    strokeWidth={0.5}
                    className={`${
                        state.isChatRoomVisibleSM && isSmallScr ? "" : "hidden"
                    } hover:fill-[var(--text)] hover:stroke-[var(--text)] hover:scale-105`}
                    onClick={handleBackNav}
                />
                <Image
                    src={
                        state.isDarkTheme ? "/logo_dark.png" : "/logo_light.png"
                    }
                    alt="logo"
                    className="img hover:cursor-pointer"
                    width={150}
                    height={200}
                    priority={true}
                    onClick={handleHomeNav}
                />
            </div>
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
                        display: state.isDarkTheme ? "block" : "none",
                    }}
                />
                <MoonOutlined
                    width={30}
                    height={30}
                    className="moon-btn"
                    style={{
                        display: state.isDarkTheme ? "none" : "block",
                    }}
                />
            </button>
        </header>
    );
}
