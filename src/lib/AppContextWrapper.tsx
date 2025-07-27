"use client";
import { AppContext, defaultAppState } from "@/lib/context";
import { useState, useEffect } from "react";

export default function AppContextWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [AppState, setAppState] = useState(defaultAppState);

    useEffect(() => {
        if (AppState.isChatRoomVisibleSM) {
            document.body.classList.add("chatroom-visible-sm");
        } else {
            document.body.classList.remove("chatroom-visible-sm");
        }
    }, [AppState.isChatRoomVisibleSM]);

    return <AppContext.Provider value={[AppState, setAppState]}>{children}</AppContext.Provider>;
}
