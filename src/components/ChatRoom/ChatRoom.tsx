"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { socket } from "@/lib/socket";
import styles from "./ChatRoom.module.css";

import MenuHamOutlined from "@/icons/MenuHamOutlined";
import AttachmentOutlined from "@/icons/AttachmentOutlined";
import EmojiOutlined from "@/icons/EmojiOutlined";
import CameraOutlined from "@/icons/CameraOutlined";
import SendMessageOutlined from "@/icons/SendMessageOutlined";
import MicrophoneOutlined from "@/icons/MicrophoneOutlined";
import Message from "./Message/Message";
import useMobKeyboardStatus from "@/hooks/useMobKeyboardStatus";
import { useAppContext } from "@/lib/context";
import { useIsMobile } from "@/hooks/useIsMobile";

type MSG = {
    isOutgoing: boolean;
    msg: string;
};
const isHideBubble = (messages: MSG[], idx: number) => {
    console.log(messages);
    if (idx === messages.length - 1) return false;
    if (messages[idx].isOutgoing === messages[idx + 1].isOutgoing) return true;
    return false;
};

export default function ChatRoom({ roomId }: { roomId: string }) {
    const isSmallScr = useIsMobile();
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const keyboardOpen = useMobKeyboardStatus();
    const [messages, setMessages] = useState<MSG[]>([]);
    const [msg, setMsg] = useState("");

    const context = useAppContext();
    if (!context) throw new Error("Context can not be null...");
    const [state, dispatch] = context;

    useEffect(() => {
        socket.on("connect", () => {
            console.log("connected to the websocket server...");
        });

        socket.on("receive-message", (data) => {
            setMessages((messages) => [...messages, data]);
        });
    }, []);

    useEffect(() => {
        if (!isSmallScr || state.isChatRoomVisibleSM) {
            dispatch({ type: "SET_CHATROOM_ID", payload: { roomId } });
        }

        return () => {
            dispatch({ type: "SET_CHATROOM_ID", payload: { roomId: null } });
        };
    }, [isSmallScr, state.isChatRoomVisibleSM, dispatch, roomId]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages]);

    const handleSubmit = () => {
        setMsg("");
        const data = {
            isOutgoing: true,
            msg,
        };
        setMessages([...messages, data]);
        socket.emit("send-message", data);
    };

    return (
        <div
            className={`${styles.chatRoom} ${
                keyboardOpen && isSmallScr && state.isChatRoomVisibleSM
                    ? styles.keyboardOpen
                    : ""
            }`}
        >
            <nav>
                <div>
                    <div>
                        <Image
                            src={`https://picsum.photos/id/${
                                Number(roomId) + 60
                            }/300/300`}
                            alt="profile_pic"
                            width={40}
                            height={40}
                            className={styles.profileImage}
                        />
                    </div>

                    <div>
                        <h3 className="font-bold">Dheeraj</h3>
                        <h5 style={{ color: "var(--text-muted)" }}>
                            Online - Last Seen, 2:02pm
                        </h5>
                    </div>
                </div>
                <div>
                    <MenuHamOutlined
                        width={30}
                        height={30}
                        strokeWidth={0.5}
                        className={styles.menuBtn}
                    />
                </div>
            </nav>

            <hr className={styles.hr} />

            <div className={styles.chatBox}>
                {messages.map((data, idx, array) => {
                    return (
                        <Message
                            key={idx}
                            isPrivateMsg={true}
                            {...data}
                            hideBubble={isHideBubble(array, idx)}
                            senderImage={null}
                        />
                    );
                })}
                
                <div ref={bottomRef} />
            </div>
            <div className={styles.chatInputBox}>
                <input
                    type="text"
                    placeholder="Type your message here..."
                    id="chatInput"
                    name="chatInput"
                    className={styles.chatInput}
                    value={msg}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setMsg(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                    }}
                />
                <button
                    type="button"
                    className={`${styles.attachmentBtn} ${styles.SVGBtn}`}
                >
                    <AttachmentOutlined className={styles.SVG} />
                </button>
                <button
                    type="button"
                    className={`${styles.emojiBtn} ${styles.SVGBtn}`}
                >
                    <EmojiOutlined className={styles.SVG} />
                </button>
                <button
                    type="button"
                    className={`${styles.cameraBtn} ${styles.SVGBtn}`}
                >
                    <CameraOutlined className={styles.SVG} />
                </button>
                <button
                    type="button"
                    className={`${styles.microphoneBtn} ${styles.SVGBtn}`}
                >
                    <MicrophoneOutlined className={styles.SVG} />
                </button>
                <button
                    type="button"
                    className={`${styles.sendMessageBtn} ${styles.SVGBtn}`}
                    onClick={handleSubmit}
                >
                    <SendMessageOutlined className={styles.SVG} />
                </button>
            </div>
        </div>
    );
}
