// components/AnimatedText.tsx
"use client";

import React, { ReactNode, CSSProperties } from "react";
import { useGSAPAnimation } from "@/hooks/useGSAPTransition";

interface AnimatedTextProps {
    children: ReactNode;
    animationClassName?: string; // Class for animation effects
    className?: string; // Custom styling for the wrapper div
    style?: CSSProperties; // Inline styles if needed
}

export default function AnimatedText({
    children,
    animationClassName = "animate-text",
    className = "",
    style = {},
}: AnimatedTextProps) {
    const containerRef = useGSAPAnimation();

    return (
        <div ref={containerRef} className={`flex flex-col ${className}`} style={style}>
            {/* Apply animation class to all children */}
            {React.Children.map(children, (child) =>
                typeof child === "string" ? child : <div className={animationClassName}>{child}</div>
            )}
        </div>
    );
}
