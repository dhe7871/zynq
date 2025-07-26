"use server";
import { getApiWithAuth } from "@/lib/axiosInstance";
import { isAxiosError } from "axios";
import { cookies } from "next/headers";

export const getUser = async (userId: string) =>{
    const cookieStore = await cookies();
    const token = cookieStore.get("token")!.value;
    const api = getApiWithAuth(token);

    try {
        const { data } = await api.get(`/api/v1/user/${userId}`);
        return data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.response?.data);
        }
        console.log("Error fetching User: ", error);
        return null;
    }
}
