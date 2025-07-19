import { useState, useEffect } from "react";

export default function useMobKeyboardStatus() {
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.visualViewport) {
                const heightDiff =
                    window.innerHeight - window.visualViewport.height;
                setKeyboardOpen(heightDiff > 150);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return keyboardOpen;
}
