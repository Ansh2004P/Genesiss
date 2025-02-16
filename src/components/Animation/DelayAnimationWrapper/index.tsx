"use client";
import { useEffect, useState } from "react";

interface DelayedAnimationWrapperProps {
    useDefaultTransition?: boolean;
    delay?: number;
    children: React.ReactNode;
}

export default function DelayedAnimationWrapper({
    useDefaultTransition = true,
    delay = 3200,
    children,
}: DelayedAnimationWrapperProps) {
    const isDev = process.env.NODE_ENV === "production";
    const adjustedDelay = isDev ? delay : 0; // Adjust delay before useEffect runs

    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, adjustedDelay);

        return () => clearTimeout(timer);
    }, [adjustedDelay]); // Depend on `adjustedDelay`

    if (!shouldRender) return null; // Prevent rendering before delay

    return (
        <div style={useDefaultTransition ? { transition: "opacity 0.3s ease-out" } : {}}>
            {children}
        </div>
    );
}
