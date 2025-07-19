"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import "./Chats.css";
import SearchOutlined from "@/icons/SearchOutlined";
import ChatCard from "../ChatCard/ChatCard";
import { useAppContext } from "@/lib/context";

export default function Chats() {
    const inputRef = useRef<HTMLInputElement>(null);
    const context = useAppContext();

    if (!context) throw new Error("ContextValue can not be null...");
    const [state, dispatch] = context;
    // useEffect(() => {
    //     dispatch({ type: "CHANGE_CHATROOM_VISIBILITY_SM" });
    //     console.log("comes here")
    // }, []);

    return (
        <div className="chats">
            <div className="search-people chats-child">
                <SearchOutlined
                    width={24}
                    height={24}
                    className="search-icon"
                    onClick={() => inputRef.current?.focus()}
                />

                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    id="search"
                    name="search"
                    className="search"
                />
            </div>
            <div className="groups chats-child">
                <div>
                    <h3 className="font-bold">Groups</h3>
                </div>
                <div>
                    {Array.from({ length: 10 }).map((_, idx) => {
                        return (
                            <div key={idx}>
                                {idx ? <hr /> : ""}
                                <ChatCard
                                    roomId={String(idx)}
                                    lastMessageBy="Dheeraj"
                                    lastMessage="Hallelujah!"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="peoples chats-child">
                <div>
                    <h3 className="font-bold">People</h3>
                </div>
                <div>
                    {Array.from({ length: 10 }).map((_, idx) => {
                        return (
                            <div key={idx}>
                                {idx ? <hr /> : ""}
                                <ChatCard
                                    roomId={String(idx)}
                                    lastMessageBy=""
                                    lastMessage="Hallelujah!"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
