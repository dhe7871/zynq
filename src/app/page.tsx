// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Header from "./components/Header/Header";
"use client";
import Navbar from "@/components/Navbar/Navbar";
import Chats from "@/components/Chats/Chats";
import ChatRoom from "@/components/ChatRoom/ChatRoom";

export default function Home() {
    return (
        <div className="big-scr">
            <Navbar />
            <Chats />
            <ChatRoom />
        </div>
    );
}
