"use client";
import { useAppContext } from "@/lib/context";

export default function SMDisplay({
    chats,
    chatroom,
}: {
    chats: React.ReactNode;
    chatroom: React.ReactNode;
}) {
    const context = useAppContext();
    if(!context) throw new Error("Context can not be null...");
    const [state, dispatch] = context;
    console.log(state.isChatRoomVisibleSM)
    return (
        <>
            {state.isChatRoomVisibleSM ? (
                <div className="small-scr">{chatroom}</div>
            ) : (
                <div className="small-scr">{chats}</div>
            )}
        </>
    );
}
