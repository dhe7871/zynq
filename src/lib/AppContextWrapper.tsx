"use client";
// import { useRedux } from "@/hooks/useRedux";
import { AppContext, defaultAppState } from "@/lib/context";
// import { defaultState } from "@/lib/reducer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function AppContextWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    // const pathname = usePathname();
    // const initialState = {
    //     ...defaultState,
    //     isChatRoomVisibleSM: pathname.startsWith("/home/chat"),
    // };
    // const [state, dispatch] = useRedux(initialState);

    const [AppState, setAppState] = useState(defaultAppState);


    useEffect(() => {
        if (AppState.isChatRoomVisibleSM) {
            document.body.classList.add("chatroom-visible-sm");
        } else {
            document.body.classList.remove("chatroom-visible-sm");
        }
    }, [AppState.isChatRoomVisibleSM]);

    useEffect(()=>{

    }, [])

    return <AppContext.Provider value={[AppState, setAppState]}>{children}</AppContext.Provider>;
}
