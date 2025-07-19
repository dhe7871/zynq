import Image from "next/image";
import styles from "./Message.module.css";

export default function Message({
    isPrivateMsg,
    isOutgoing,
    hideBubble,
    hideImg,
    msg,
    senderImage,
}: {
    isPrivateMsg: boolean;
    isOutgoing: boolean;
    hideBubble?: boolean | false;
    hideImg?: boolean | false;
    msg: string;
    senderImage: string | null;
}) {
    return (
        <div
            className={`${styles.msg} ${
                isOutgoing ? styles.outMsg : styles.inMsg
            } ${!isPrivateMsg ? styles.groupMsg : ""} ${
                hideBubble ? styles.hideBubble : ""
            }`}
        >
            {senderImage && !isPrivateMsg && !isOutgoing && !hideImg ? (
                <div>
                    <Image
                        src={senderImage}
                        alt="sender Image"
                        height={20}
                        width={20}
                        className={styles.img}
                    />
                </div>
            ) : (
                ""
            )}
            <div className={styles.textMsg}>{msg}</div>
        </div>
    );
}
