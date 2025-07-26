"use client";
import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import styles from "./login.module.css";
import PasswordDiv from "@/utils/components/PasswordDiv/PasswordDiv";
import { submitLoginForm } from "@/actions/authActions";
import ErrorCard from "@/utils/components/ErrorCard/ErrorCard";
import { useAppContext } from "@/lib/context";

const initialState: formState = {
    msg: "",
    code: -1,

    success: false,
};

export default function ModalLoginPage() {
    const [state, formAction, isPending] = useActionState(
        submitLoginForm,
        initialState
    );
    const router = useRouter();

    const [_, setAppState] = useAppContext();

    useEffect(() => {
        if (state.success) {
            setAppState((prev) =>{
                return {...prev, user: state.payload?.user}
            })

            // dispatch({
            //     type: "SET_USER",
            //     payload: { user: state.payload?.user },
            // });

            console.log(state.payload?.user);

            router.push("/home");
        }
    }, [state.success, state.payload, router, setAppState]);

    return (
        <div className={styles.modalPage}>
            <ErrorCard state={state} />
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
                    <PasswordDiv name="password" />
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
