import ChatRoom from "@/components/ChatRoom/ChatRoom";

export const dynamic = "force-dynamic";

export default async function ChatRoomPage({
    params,
}: {
    params: Promise<{ roomId: string }>;
}) {
    const { roomId } = await params;
    console.log(roomId);

    return <ChatRoom />
}
