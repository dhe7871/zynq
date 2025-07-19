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
    if (!context) return null;
    const [state] = context;

    return (
        <div className="small-scr">
            {state.isChatRoomVisibleSM ? chatroom : chats}
        </div>
    );
}
