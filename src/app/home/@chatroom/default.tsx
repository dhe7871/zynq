import LockOutlined from "@/icons/lockOutlined";

export default function ChatRoomDefaultPage() {
    console.log("Rendering @chatroom/default.tsx");
    return (
        <div className="text-[var(--text-muted)] w-full h-full flex flex-col justify-center text-center">
            <h1 className="hover:text-[var(--text)]">Send Messages ...</h1>
            <div className="flex justify-center items-center">
                <LockOutlined
                    className="w-[0.9rem] h-[0.9rem]"
                    strokeWidth={0.5}
                    fill="var(--text-muted)"
                    stroke="var(--text-muted)"
                />
                <div style={{ paddingInline: "0.2rem" }}>
                    Privately and securely
                </div>
            </div>
        </div>
    );
}
