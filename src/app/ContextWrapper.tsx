"use client";
import { useRedux } from "@/hooks/useRedux";
import { AppContext } from "@/lib/context";

export default function ContextWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useRedux();
    return <AppContext value={[state, dispatch]}>{children}</AppContext>;
}
