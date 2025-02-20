// components/AnimatedText.tsx
"use client";

import React, { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    children: ReactNode;
    animationClassName?: string; // Class for animation effects
    className?: string; // Custom styling for the wrapper div
    style?: CSSProperties; // Inline styles if needed
}
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
    return (
        <motion.div className={`flex flex-col ${className}`} style={style}>
            {React.Children.map(children, (child, index) => {
                // console.log(child._owner);
                return typeof child === "string" ? (
                    <motion.span
                        className={animationClassName}
                        initial={{ opacity: 0, y: 20, skewY: 4 }}
                        whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        style={{ display: "inline-block" }}
                    >
                        {child}
                    </motion.span>
                ) : (
                    <motion.div
                        className={animationClassName}
                        initial={{ opacity: 0, y: 20, skewY: child!._owner.name === "AboutSection" ? 0 : 4 }}
                        whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                        transition={{ duration: 1, y: 0, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {child}
                    </motion.div>
                )

            })}
        </motion.div>
    );
}
