import ChatRoom from "@/components/ChatRoom/ChatRoom";

export default async function ChatRoomPage({
    params,
}: {
    params: Promise<{ roomId: string }>;
}) {
    const { roomId } = await params;
    console.log("chatRoomId: ", roomId);

    return <ChatRoom roomId={roomId} />
}
