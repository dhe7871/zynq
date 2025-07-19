"use server";
import axios from "axios";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export async function submitSignupForm(
    prevState: formState,
    formData: FormData
) {
    try {
        const name = formData.get("name") as string;
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_ZYNQ_API_URL}/api/v1/auth/signup`,
            { name, username, email, password }
        );
        const { msg, token } = response.data;
        console.log(msg);

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", // or "strict"/"none"
            maxAge: 7 * 24 * 60 * 60, // in seconds (7 days)
        });

        console.log(prevState);
        return { ...prevState, success: true };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message: ", error.response?.data);
            prevState.error.code = error.response?.status || null;
            prevState.error.msg = error.response?.data.msg;
        }
        return prevState;
    }
}

export const submitLoginForm = async (
    prevState: formState,
    formData: FormData
) => {
    try {
        const usEmail = formData.get("usEmail") as string;
        const password = formData.get("password") as string;

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_ZYNQ_API_URL}/api/v1/auth/login`,
            { usEmail, password }
        );

        const { token } = response.data;
        console.log(response.data);

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", // or "strict"/"none"
            maxAge: 7 * 24 * 60 * 60, // in seconds (7 days)
        });

        return { ...prevState, success: true };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message: ", error.response?.data);
            prevState.error.code = error.response?.status || null;
            prevState.error.msg = error.response?.data.msg;
        }
        return prevState;
    }
};

export const submitForgotPasswordForm = async (
    prevState: formState,
    formData: FormData
) => {
    try {
        const email = formData.get("email") as string;
        const response = await axios.post(`${process.env.NEXT_PUBLIC_ZYNQ_API_URL}/api/v1/auth/forgot-password`,
            {email}
        );




        return {...prevState, success: true};
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message: ", error.response?.data);
            prevState.error.code = error.response?.status || null;
            prevState.error.msg = error.response?.data.msg;
        }
        return prevState;
    }
};
