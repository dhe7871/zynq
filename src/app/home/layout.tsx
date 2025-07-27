import { cookies, headers } from "next/headers";
import { getUser } from "@/actions/getUser";
import AppInitializer from "@/utils/AppInitializer";
import SocketClient from "@/lib/SocketClient";
import { redirect } from "next/navigation";

export default async function HomeLayout({
    children,
    chats,
    chatroom,
}: {
    children: React.ReactNode;
    chats: React.ReactNode;
    chatroom: React.ReactNode;
}) {
    const headersList = await headers();
    const userId = headersList.get("x-user-id")!;
    const user = await getUser(userId);

    const cookieStore = await cookies();
    const token = cookieStore.get("token")!.value;

    if (!user) {
        redirect("/login");
    }

    return (
        <>
            <SocketClient token={token}/>
            <AppInitializer user={user} token={token} />

            {/*Div for Small Screens */}
            <div className="small-scr">
                <div className="chats-container">{chats}</div>
                <div className="chatroom-container">{chatroom}</div>
            </div>
            {/* Div for Big Screens */}
            <div className="big-scr">
                {children}
                {chats}
                {chatroom}
            </div>
        </>
    );
}
