"use client";
import { useEffect } from "react";
import { getSocket } from "@/lib/socket";

export default function SocketClient({token}: {token: string}) {
    useEffect(() => {
        const socket = getSocket(token);

        socket.on("connect", () => {
            console.log("Socket connected: ", socket.id);
        });

        socket.on("disconnect", () => {
            console.log("Socket disconnected: ", socket.id);
        });

        return () => {
            socket.disconnect();
        };
    }, [token]);

    return null;
}
