"use Client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import ChatOutlined from "@/icons/ChatOutlined";
import NotificationOutlined from "@/icons/NotificationOutlined";
import SettingOutlined from "@/icons/SettingOutlined";

export default function Navbar() {
    const [tabOpen, setTabOpen] = useState({
        chat: true,
        notification: false,
        setting: false,
        profile: false,
    });
    const handleClick = (btnName: string) => {
        switch (btnName) {
            case "chat":
                setTabOpen({
                    chat: true,
                    notification: false,
                    setting: false,
                    profile: false,
                });
                break;
            case "notification":
                setTabOpen({
                    chat: tabOpen.notification,
                    notification: !tabOpen.notification,
                    setting: false,
                    profile: false,
                });
                break;
            case "setting":
                setTabOpen({
                    chat: tabOpen.setting,
                    notification: false,
                    setting: !tabOpen.setting,
                    profile: false,
                });
                break;
            case "profile":
                setTabOpen({
                    chat: tabOpen.profile,
                    notification: false,
                    setting: false,
                    profile: !tabOpen.profile,
                });
                break;
        }
    };

    return (
        <div className={styles.nav}>
            <div className={styles.iconsDiv}>
                <div
                    className={`${styles.iconDiv} ${
                        tabOpen.chat ? styles.active : ""
                    }`}
                >
                    <ChatOutlined
                        width={30}
                        height={30}
                        strokeWidth={0.5}
                        onClick={() => handleClick("chat")}
                    />
                </div>
                <div
                    className={`${styles.iconDiv} ${
                        tabOpen.notification ? styles.active : ""
                    }`}
                >
                    <NotificationOutlined
                        width={30}
                        height={30}
                        strokeWidth={0.5}
                        onClick={() => handleClick("notification")}
                    />
                </div>
                <div
                    className={`${styles.iconDiv} ${
                        tabOpen.setting ? styles.active : ""
                    }`}
                >
                    <SettingOutlined
                        width={30}
                        height={30}
                        strokeWidth={0.5}
                        onClick={() => handleClick("setting")}
                    />
                </div>
            </div>
            <div>
                <Image
                    src="/profile_photo_1.jpg"
                    alt="profile_pic"
                    width={40}
                    height={40}
                    className={`${styles.profileImage} ${tabOpen.profile ? styles.profile : ""}`}
                    priority={true}
                    onClick={() => handleClick("profile")}
                />
            </div>
        </div>
    );
}