"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ChatCard.module.css";
import { useAppContext, useChatContext } from "@/lib/context";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ChatCard({
    roomId,
    imgUrl,
    name,
    lastMessageBy,
    lastMessage,
}: {
    roomId: string;
    imgUrl: string;
    name: string
    lastMessageBy: string;
    lastMessage: string;
}) {
    const isSmallScr = useIsMobile();
    const router = useRouter();
    const [appState, setAppState] = useAppContext();
    const [chatState, setChatState] = useChatContext();

    return (
        <div
            className={`${styles.chatCard} ${
                roomId === chatState.roomId ? "bg-[var(--bg)]" : ""
            } hover:bg-[var(--bg)] transition-colors duration-200 ease-in-out`}
            onClick={() => {
                console.log("isSmallScr: ", isSmallScr);

                console.log("changing chatRoom visibility");
                setAppState((prev) => {
                    return { ...prev, isChatRoomVisibleSM: true };
                });

                // dispatch({
                //     type: "SET_CHATROOM_VISIBILITY_SM",
                //     payload: {
                //         isVisibleSM: true,
                //     },
                // });

                // if (isSmallScr) {
                //     console.log("changing chatRoom visibility");
                //     dispatch({
                //         type: "CHANGE_CHATROOM_VISIBILITY_SM",
                //     });
                // }
                router.push(`/home/chat/${roomId}`);
            }}
        >
            <div>
                <Image
                    src={imgUrl}
                    alt="profile_pic"
                    width={40}
                    height={40}
                    className={styles.profileImage}
                />
            </div>
            <div className={styles.chatCardData}>
                <div>
                    <h4 className="font-bold">{name}</h4>
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
