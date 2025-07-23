import LoadingOutlined from "@/icons/LoadingOutlined";

export default function LoadingPage() {
    return (
        <div className="flex justify-center items-center gap-[0.5rem]">
            <div>
                <LoadingOutlined
                    className="w-[2rem] h-[2rem] hover:fill-[var(--text)] hover:stroke-[var(--text)] animate-spin"
                    strokeWidth={0.5}
                    fill="var(--text-muted)"
                    stroke="var(--text-muted)"
                />
            </div>
            <h3 className="text-[var(--text-muted)]">Loading...</h3>
        </div>
    );
}
