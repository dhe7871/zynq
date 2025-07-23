import axios from "axios";
import { notFound } from "next/navigation";
import ModalResetPasswordPage from "./ModalResetPassword";

export default async function ResetPasswordPage({
    params,
}: {
    params: Promise<{ resetPasswordToken: string }>;
}) {
    const { resetPasswordToken } = await params;

    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/verify-token`,
            {
                headers: {
                    Authorization: `Bearer ${resetPasswordToken}`,
                },
            }
        );
        console.log("reset password validation data: ", data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("resetPasswordToken validation error: ", error.response?.data);
        }
        notFound();
    }
    

    return <ModalResetPasswordPage resetPasswordToken={resetPasswordToken} />;
}
