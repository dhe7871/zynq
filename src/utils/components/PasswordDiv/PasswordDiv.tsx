"use client";
import styles from "./PasswordDiv.module.css";
import EyeOutlined from "@/icons/eyeOutlined";
import { useState } from "react";

export default function PasswordDiv({name, label}: {name: string ,label?: string}) {
    const [showPassword, setShowPassword] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);

        if (!showPassword) {
            const timeoutId = setTimeout(() => setShowPassword(false), 5000);
            setTimeoutId(timeoutId);
        }else if(timeoutId){
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };

    return (
        <div className={styles.passwordDiv}>
            <label htmlFor="password">{label || "Password"}</label>
            <input
                type={showPassword ? "text" : "password"}
                name={name}
                id="password"
                className={styles.inputField}
                required
            />
            <button type="button" onClick={toggleShowPassword}>
                <EyeOutlined className={`${styles.SVG} ${showPassword ? styles.passwordVisible: ""}`} />
            </button>
        </div>
    );
}
