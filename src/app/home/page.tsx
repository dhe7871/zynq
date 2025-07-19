"use client";
import Navbar from "@/components/Navbar/Navbar";
import { useMediaQuery } from "@/customHooks/useMediaQuery";
import { useAppContext } from "@/lib/context";
import { useEffect } from "react";

export default function HomePage() {
    const isSmallScr = useMediaQuery("(max-width: 768px)");
    const context = useAppContext();
    if (!context) throw new Error("Context can not be null...");
    const [state, dispatch] = context;
    console.log(state);

    useEffect(() => {
        if (state.isSmallScr !== isSmallScr) {
            dispatch({ type: "SET_IS_SMALL_SCR", payload: isSmallScr });
        }
    }, [isSmallScr]);

    return <Navbar />;
}
