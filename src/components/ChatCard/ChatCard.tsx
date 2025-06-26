import Image from "next/image";
import styles from "./ChatCard.module.css";

export default function ChatCard({lastMessageBy}:{lastMessageBy: string}) {
    return (
        <div className={`${styles.chatCard}`}>
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
                        {lastMessageBy ? `~${lastMessageBy}: `: ""}Hallelujah!
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
