import axios from "axios";

export function getApiWithAuth(token: string){
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}