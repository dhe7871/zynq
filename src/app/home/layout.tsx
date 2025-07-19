import MediaQuery from "react-responsive";
import SMDisplay from "./smDisplay";
import Link from "next/link";

export default function HomeLayout({
    children,
    chats,
    chatroom,
}: {
    children: React.ReactNode;
    chats: React.ReactNode;
    chatroom: React.ReactNode;
}) {
    return (
        <>
            <SMDisplay chats={chats} chatroom={chatroom} />
            <div className="big-scr">
                {children}
                {chats}
                {chatroom}
            </div>
        </>
    );
}
