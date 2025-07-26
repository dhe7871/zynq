"use client";
import { useRef } from "react";
import "./Chats.css";
import SearchOutlined from "@/icons/SearchOutlined";
import ChatCard from "../ChatCard/ChatCard";
import { useAppContext } from "@/lib/context";

export default function Chats() {
    const inputRef = useRef<HTMLInputElement>(null);
    // const [contacts, setContacts] = useState<User[]>([]);
    const [appState, setAppState] = useAppContext();

    // useEffect(() => {
    //     if (!appState.user) return;

    //     const socket = getSocket();

    //     const handleContacts = (contacts: User[]) => {
    //         console.log(contacts);
            

    //         console.log(appState.user);

    //         for (const contact of contacts) {
    //             const roomId = [appState.user?._id, contact._id]
    //                 .sort()
    //                 .join("-");
    //             contact.roomId = roomId;
    //             console.log("roomId: ", roomId)
    //             socket.emit("JOIN_ROOM", roomId);
    //         }

    //         setAppState((prev) => {
    //             return { ...prev, contacts};
    //         });
    //     };

    //     socket.on("GET_CONTACTS", handleContacts);

    //     return () => {
    //         socket.off("GET_CONTACTS", handleContacts);
    //     };
    // }, [appState.user, setAppState]);

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
                                    imgUrl="https://picsum.photos/id/1/300/300"
                                    name="Friends Forever"
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
                    {appState.contacts.map((contact, idx) => {
                        return (
                            <div key={idx}>
                                {idx ? <hr /> : ""}
                                <ChatCard
                                    roomId={[appState.user?._id, contact._id]
                                        .sort()
                                        .join("-")}
                                    imgUrl={contact.imgUrl}
                                    name={contact.name}
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
