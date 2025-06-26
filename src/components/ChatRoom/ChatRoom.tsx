import Image from "next/image";
import styles from "./ChatRoom.module.css";
import MenuHamOutlined from "@/icons/MenuHamOutlined";
import AttachmentOutlined from "@/icons/AttachmentOutlined";
import EmojiOutlined from "@/icons/EmojiOutlined";
import CameraOutlined from "@/icons/CameraOutlined";
import SendMessageOutlined from "@/icons/SendMessageOutlined";
import MicrophoneOutlined from "@/icons/MicrophoneOutlined";

export default function ChatRoom() {
    return (
        <div className={styles.chatRoom}>
            <nav>
                <div>
                    <div>
                        <Image
                            src="/profile_photo_1.jpg"
                            alt="profile_pic"
                            width={40}
                            height={40}
                            className={styles.profileImage}
                        />
                    </div>

                    <div>
                        <h2 className="font-bold">Dheeraj</h2>
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

            <hr style={{ marginInline: "1rem" }} />

            <div className={styles.chatRoomBody}>
                <div className={styles.chatBox}>Chats</div>
                <div className={styles.chatInputBox}>
                    <input
                        type="text"
                        placeholder="Type your message here..."
                        id="chatInput"
                        name="chatInput"
                        className={styles.chatInput}
                    />
                    <AttachmentOutlined
                        className={`${styles.SVGBtn} ${styles.attachmentBtn}`}
                    />
                    <EmojiOutlined
                        className={`${styles.SVGBtn} ${styles.emojiBtn}`}
                    />
                    <CameraOutlined
                        className={`${styles.SVGBtn} ${styles.cameraBtn}`}
                    />
                    <MicrophoneOutlined
                        className={`${styles.SVGBtn} ${styles.microphoneBtn}`}
                    />
                    <div>
                        <SendMessageOutlined
                            className={`${styles.SVGBtn} ${styles.sendMessageBtn}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
