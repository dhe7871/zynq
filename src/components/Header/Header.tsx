"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Header.css";
import SunOutlined from "@/icons/SunOutlined";
import MoonOutlined from "@/icons/MoonOutlined";
import ArrowLeftOutlined from "@/icons/ArrowLeftOutlined";
import { useAppContext } from "@/lib/context";

export default function Header() {
    const router = useRouter();
    const context = useAppContext();

    if (!context) throw new Error("context can not be null");
    const [state, dispatch] = context;

    useEffect(() => {
        const htmlDocument = document.documentElement;
        const darkBrowserTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        htmlDocument.setAttribute(
            "data-theme",
            darkBrowserTheme ? "dark" : "light"
        );
        dispatch({ type: "SET_IS_DARK_THEME", payload: darkBrowserTheme });
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
        dispatch({ type: "SET_IS_DARK_THEME", payload: !state.isDarkTheme });
    };

    const handleBackNav = () => {
        if (state.isChatRoomVisibleSM) {
            dispatch({ type: "CHANGE_CHATROOM_VISIBILITY_SM" });
            console.log("backing");
            window.location.href = "/home";

            // router.push("/home");
        }
    };

    const handleHomeNav = () => {
        if (state.isSmallScr && state.isChatRoomVisibleSM) {
            dispatch({ type: "CHANGE_CHATROOM_VISIBILITY_SM" });
        }
        console.log("backing");
        window.location.href = "/home";
        // router.push("/home");
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
                        state.isChatRoomVisibleSM && state.isSmallScr
                            ? ""
                            : "hidden"
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
                        // position: "absolute",
                        // opacity: state.isDarkTheme ? "1" : "0",
                        display: state.isDarkTheme ? "block" : "none",
                    }}
                />
                <MoonOutlined
                    width={30}
                    height={30}
                    className="moon-btn"
                    style={{
                        // position: "absolute",
                        // top: "0",
                        // opacity: state.isDarkTheme ? "0" : "1",
                        display: state.isDarkTheme ? "none" : "block",
                    }}
                />
            </button>
        </header>
    );
}
