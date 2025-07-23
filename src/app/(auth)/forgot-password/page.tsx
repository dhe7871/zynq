"use client";
import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import styles from "./forgot-password.module.css";
import { submitForgotPasswordForm } from "@/actions/authActions";

const initialState: formState = {
    error: {
        msg: "",
        code: -1,
    },
    success: false,
};

export default function ModalForgetPasswordPage() {
    const [state, formAction, isPending] = useActionState(
        submitForgotPasswordForm,
        initialState
    );

    return (
        <div className={styles.modalPage}>
            <div className={styles.modal}>
                <h2>Forgot Your Password?</h2>
                <Form action={formAction} className={styles.form}>
                    <div style={{ marginTop: "1rem" }}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email..."
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isPending}
                    >
                        {isPending ? "Submitting..." : "Submit"}
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
