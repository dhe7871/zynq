"use client";
import { useAppContext } from "@/lib/context";
import { useEffect } from "react";
import { getSocket } from "@/lib/socket";

export default function AppInitializer({ user, token }: { user: User, token: string }) {
    const [_, setAppState] = useAppContext();

    useEffect(() => {
        setAppState((prev) => {
            return { ...prev, user, token };
        });
    }, [user, token, setAppState]);

    useEffect(()=>{
        const socket = getSocket();

        const handleContacts = (contacts: User[]) =>{
            for(const contact of contacts){
                const roomId = [user._id, contact._id].sort().join("-");
                contact.roomId = roomId;
                socket.emit("JOIN_ROOM", roomId);
            }

            setAppState((prev) =>{
                return {...prev, contacts};
            })
        }

        socket.on("GET_CONTACTS", handleContacts);

        return ()=>{
            socket.off("GET_CONTACTS", handleContacts);
        }
    }, [setAppState, user._id]);

    return null;
}
