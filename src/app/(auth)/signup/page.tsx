"use client";
import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

import styles from "./signup.module.css";
import PasswordDiv from "@/utils/components/PasswordDiv/PasswordDiv";
import { submitSignupForm } from "@/actions/authActions";
import ErrorCard from "@/utils/components/ErrorCard/ErrorCard";

const initialState: formState = {
    msg: "",
    code: -1,
    success: false,
};

export default function ModalSignupPage() {
    const [state, formAction, isPending] = useActionState(
        submitSignupForm,
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
            <ErrorCard state={state} />
            <div className={styles.modal}>
                <h2>Sign up to Zynq</h2>
                <Form action={formAction} className={styles.form}>
                    <div className={styles.fieldDiv}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.fieldDiv}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.fieldDiv}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <PasswordDiv name="password" />
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isPending}
                    >
                        {isPending ? "Signing up..." : "Sign up"}
                    </button>
                </Form>
                <div className="text-center">
                    <h5>
                        Already a User?{" "}
                        <Link
                            href="/login"
                            className="text-blue-400 hover:underline hover:decoration-solid"
                        >
                            Log in
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
