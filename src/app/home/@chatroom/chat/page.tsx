//this file is just to make sure that when navigating to /home programmatically its goes
//from this file hence the last active state of the @chatroom slot become this default page
//and when we at last reach the /home page we will have the default page visible in the 
//@chatroom slot.
"use client";
import LockOutlined from "@/icons/lockOutlined";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatRoomDefaultPage() {
    const router = useRouter();
    console.log("Rendering @chatroom/chat/page.tsx");

    useEffect(() => {
        router.replace("/home");
    }, [router]);
    return (
        <div className="text-[var(--text-muted)] w-full h-full flex flex-col justify-center text-center">
            <h1 className="hover:text-[var(--text)]">Send Messages ...</h1>
            <div className="flex justify-center items-center">
                <LockOutlined
                    className="w-[0.9rem] h-[0.9rem]"
                    strokeWidth={0.5}
                    fill="var(--text-muted)"
                    stroke="var(--text-muted)"
                />
                <div style={{ paddingInline: "0.2rem" }}>
                    Privately and securely
                </div>
            </div>
        </div>
    );
}
