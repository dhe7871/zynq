"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ChatCard.module.css";
import { useAppContext } from "@/lib/context";

export default function ChatCard({
    roomId,
    lastMessageBy,
    lastMessage,
}: {
    roomId: string;
    lastMessageBy: string;
    lastMessage: string;
}) {
    const router = useRouter();
    const context = useAppContext();

    if (!context) throw new Error("ContextValue can not be null...");
    const [state, dispatch] = context;

    return (
        <div
            className={`${styles.chatCard}`}
            onClick={() => {
                console.log("isSmallScr: ", state.isSmallScr);

                if (state.isSmallScr) {
                    console.log("changing chatRoom visibility");
                    dispatch({
                        type: "CHANGE_CHATROOM_VISIBILITY_SM",
                    });
                }
                router.push(`/home/chat/${roomId}`);
            }}
        >
            <div>
                <Image
                    src="/profile_photo_1.jpg"
                    alt="profile_pic"
                    width={40}
                    height={40}
                    className={styles.profileImage}
                />
            </div>
            <div className={styles.chatCardData}>
                <div>
                    <h4 className="font-bold">Friends Forever</h4>
                    <h5 style={{ color: "var(--text-muted)" }}>
                        {lastMessageBy ? `~${lastMessageBy}: ` : ""}
                        {lastMessage}
                    </h5>
                </div>
                <div>
                    <h4
                        style={{ color: "var(--text-muted)", textAlign: "end" }}
                    >
                        Today, 9:52pm
                    </h4>

                    <div className={styles.numUnreadMess}>
                        <h5>4</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
