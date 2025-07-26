import { useEffect, useRef, useState } from "react";
import styles from "./ErrorCard.module.css";

export default function ErrorCard({
    state,
    children,
}: {
    state: formState;
    children?: React.ReactNode;
}) {
    const [errorMsg, setErrorMsg] = useState("");
    const errorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (state.msg) {
            setErrorMsg(state.msg);

            const timer = setTimeout(() => {
                setErrorMsg("");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [state]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                errorMsg &&
                errorRef.current &&
                !errorRef.current.contains(e.target as Node)
            ) {
                setErrorMsg("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [errorMsg]);

    return (
        <div
            ref={errorRef}
            className={`${styles.errorDiv} ${
                errorMsg ? styles.showError : ""
            } ${
                state.code
                    ? state.code < 200
                        ? "bg-[var(--info)]"
                        : state.code < 300
                        ? "bg-[var(--success)]"
                        : state.code < 400
                        ? "bg-[var(--warning)]"
                        : "bg-[var(--danger)]"
                    : "bg-[var(--warning)]"
            }`}
        >
            {children || state.msg}
        </div>
    );
}
