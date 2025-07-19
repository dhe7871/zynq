"use client";
import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import styles from "./login.module.css";
import PasswordDiv from "./PasswordDiv";
import { submitLoginForm } from "@/actions/authActions";

const initialState: formState = {
    error: {
        msg: "",
        code: -1,
    },
    success: false,
};

export default function ModalLoginPage() {
    const [state, formAction, isPending] = useActionState(
        submitLoginForm,
        initialState
    );
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            router.push("/home");
        }
    }, [state.success, router]);

    return (
        <div className={styles.modalPage}>
            <div className={styles.modal}>
                <h2>Log in to Zynq</h2>
                <Form action={formAction} className={styles.form}>
                    <div style={{ marginTop: "1rem" }}>
                        <label htmlFor="usEmail">Username/E-mail</label>
                        <input
                            type="text"
                            name="usEmail"
                            id="usEmail"
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <PasswordDiv />
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isPending}
                    >
                        {isPending ? "Logging in..." : "Log in"}
                    </button>
                </Form>
                <div className="text-center">
                    <h5>
                        Not a User?{" "}
                        <Link
                            href="/signup"
                            className="text-blue-400 hover:underline hover:decoration-solid"
                        >
                            Sign Up
                        </Link>
                    </h5>
                </div>
                <div className="text-center">
                    <h5>
                        <Link
                            href="/forgot-password"
                            className="text-blue-400 hover:underline hover:decoration-solid"
                        >
                            Forgot PassWord?
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}
