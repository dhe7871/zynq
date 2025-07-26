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
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signup`,
            { name, username, email, password }
        );
        const { msg, token } = response.data;
        console.log(msg);

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict", // or "strict"/"none"
            maxAge: 7 * 24 * 60 * 60, // in seconds (7 days)
        });

        console.log(prevState);
        return {
            ...prevState,
            msg: "Hurray! You Signed up successfully...",
            success: true,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message: ", error.response?.data);
            return {
                ...prevState,
                code: error.response?.status || 500,
                msg:
                    error.response?.data?.msg ||
                    "Something went wrong while Signing you up...",
            };
        }
        return {
            ...prevState,
            msg: "Unexpected error occurred while Signing you up...",
            code: 500,
        };
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
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
            { usEmail, password }
        );

        const { token, user } = response.data;
        console.log(response.data);

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict", // or "strict"/"none"
            maxAge: 7 * 24 * 60 * 60, // in seconds (7 days)
        });

        return {
            ...prevState,
            payload: {user},
            msg: "Logged in successfully...",
            code: response.status,
            success: true,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message: ", error.response?.data);
            return {
                ...prevState,
                code: error.response?.status || 500,
                msg:
                    error.response?.data?.msg ||
                    "Something went wrong while Logging in...",
            };
        }
        return {
            ...prevState,
            msg: "Unexpected error occurred while Logging in...",
            code: 500,
        };
    }
};

export const submitForgotPasswordForm = async (
    prevState: formState,
    formData: FormData
) => {
    try {
        const email = formData.get("email") as string;
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/forgot-password`,
            { email }
        );

        console.log("Reset-Password Response: ", response.data);

        return {
            ...prevState,
            msg: `Email with Password Reset link has been sent to ${email}...`,
            code: response.status,
            success: true,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message: ", error.response?.data);
            return {
                ...prevState,
                code: error.response?.status || 500,
                msg:
                    error.response?.data?.msg ||
                    "Something went wrong while submitting your email to reset the password...",
            };
        }
        return {
            ...prevState,
            msg: "Unexpected error occurred while submitting your email to reset the password...",
            code: 500,
        };
    }
};

export const submitResetPasswordForm = async (
    prevState: formState,
    formData: FormData
) => {
    try {
        const newPassword = formData.get("newPassword") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (newPassword !== confirmPassword) {
            return {
                ...prevState,
                msg: "Please enter the same password in confirm password field...",
                code: 400,
            };
        }

        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/reset-password`,
            {
                resetPasswordToken: prevState.resetPasswordToken,
                newPassword
            }
        );

        return {
            ...prevState,
            msg:
                response.status === 204
                    ? "Password reset successful, "
                    : "Unexpected Error Occurred while resetting your password...",
            code: response.status,
            success: response.status === 204,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error message: ", error.response?.data);
            return {
                ...prevState,
                code: error.response?.status || 500,
                msg:
                    error.response?.data?.msg ||
                    "Something went wrong while resetting the password...",
            };
        }
        return {
            ...prevState,
            msg: "Unexpected error occurred while resetting you password...", 
            code: 500
        };
    }
};
