"use client";
import { ChatContext, defaultChatState } from "@/lib/context";
import { useState } from "react";

export default function ChatContextWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [chatState, setChatState] = useState(defaultChatState);

    return <ChatContext.Provider value={[chatState, setChatState]}>{children}</ChatContext.Provider>;
}
