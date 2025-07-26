import ChatRoom from "@/components/ChatRoom/ChatRoom";
import ChatContextWrapper from "@/lib/ChatContextWrapper";

export default async function ChatRoomPage({
    params,
}: {
    params: Promise<{ roomId: string }>;
}) {
    const { roomId } = await params;
    console.log("chatRoomId: ", roomId);

    return (
        <ChatContextWrapper>
            <ChatRoom roomId={roomId} />
        </ChatContextWrapper>
    );
}
