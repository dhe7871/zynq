"use client";
import { useRef } from "react";
// import { CiSearch } from "react-icons/ci";
import "./Chats.css";
import SearchOutlined from "@/icons/SearchOutlined";
import ChatCard from "../ChatCard/ChatCard";

export default function Chats() {
    const inputRef = useRef<HTMLInputElement>(null);
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
                                <ChatCard lastMessageBy="Dheeraj" />
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
                                <ChatCard lastMessageBy="" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
