"use client";
import { useEffect } from "react";
import { getSocket } from "@/lib/socket";

export default function SocketClient() {
    useEffect(() => {
        const socket = getSocket();

        socket.on("connect", () => {
            console.log("Socket connected: ", socket.id);
        });

        socket.on("disconnect", () => {
            console.log("Socket disconnected: ", socket.id);
        });

        // return () => {
        //     socket.disconnect();
        // };
    }, []);

    return null;
}
