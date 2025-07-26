"use client";
import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import styles from "../forgot-password.module.css";
import { submitResetPasswordForm } from "@/actions/authActions";
import PasswordDiv from "@/utils/components/PasswordDiv/PasswordDiv";
import ErrorCard from "@/utils/components/ErrorCard/ErrorCard";

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
    const [timeTillRedirect, setTimeTillRedirect] = useState(5);
    const router = useRouter();

    useEffect(() => {
        if (state.success && timeTillRedirect > 0) {
            const timer = setTimeout(() => {
                setTimeTillRedirect((prev) => prev - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }

        if (timeTillRedirect === 0) {
            router.push("/login");
        }
    }, [timeTillRedirect, state.success, router]);

    return (
        <div className={styles.modalPage}>
            <ErrorCard state={state}>
                {state.success ? (
                    <p>
                        Now you will be redirected to{" "}
                        <Link href="/login">
                            <u>
                                <i>login page</i>
                            </u>
                        </Link>{" "}
                        in <b>{timeTillRedirect}s</b>.
                    </p>
                ) : (
                    ""
                )}
            </ErrorCard>
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
