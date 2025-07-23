"use client";
import Form from "next/form";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import styles from "../forgot-password.module.css";
import errorStyles from "@/utils/errorStyles.module.css";
import { submitResetPasswordForm } from "@/actions/authActions";
import PasswordDiv from "@/utils/components/PasswordDiv/PasswordDiv";

const initialState: formState = {
    msg: "",
    code: -1,

    success: false,
};

export default function ModalResetPasswordPage({
    resetPasswordToken,
}: {
    resetPasswordToken: string;
}) {
    const [state, formAction, isPending] = useActionState(
        submitResetPasswordForm,
        { ...initialState, resetPasswordToken }
    );
    const [errorMsg, setErrorMsg] = useState("");
    const errorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (state.msg) {
            setErrorMsg(state.msg);

            const timer = setTimeout(() => {
                setErrorMsg("");
            }, 3000);

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
        <div className={`${styles.modalPage} relative`}>
            <div
                ref={errorRef}
                className={`${errorStyles.errorDiv} ${
                    errorMsg ? errorStyles.showError : ""
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
                {state.msg}
            </div>
            <div className={styles.modal}>
                <h2>Reset Your Password</h2>
                <Form action={formAction} className={styles.form}>
                    <PasswordDiv name="newPassword" label="New Password" />
                    <PasswordDiv
                        name="confirmPassword"
                        label="Confirm Password"
                    />
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isPending}
                    >
                        {isPending ? "Resetting..." : "Reset Password"}
                    </button>
                </Form>
                <div className={styles.navLinks}>
                    <h5>
                        <Link
                            href="/login"
                            className="text-blue-400 hover:underline hover:decoration-solid"
                        >
                            Log in
                        </Link>
                    </h5>
                    <h5>
                        <Link
                            href="/signup"
                            className="text-blue-400 hover:underline hover:decoration-solid"
                        >
                            Sign up
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}
