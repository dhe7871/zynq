import { useState, useEffect } from "react";

export default function useMobKeyboardStatus() {
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.visualViewport) {
                const heightDiff =
                    window.innerHeight - window.visualViewport.height;
                console.log(heightDiff);
                setKeyboardOpen(heightDiff > 150);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log("keyboardOpen:", keyboardOpen);
    return keyboardOpen;
}
