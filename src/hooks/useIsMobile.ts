"use client";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const mobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        setIsMobile(mobile);
    }, [mobile]);

    return isMobile;
};
