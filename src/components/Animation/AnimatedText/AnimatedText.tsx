// components/AnimatedText.tsx
"use client";

import React, { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

interface CustomReactElement extends React.ReactElement {
    _owner?: { name?: string };
}

interface AnimatedTextProps {
    children: ReactNode;
    animationClassName?: string; // Class for animation effects
    className?: string; // Custom styling for the wrapper div
    style?: CSSProperties; // Inline styles if needed
    slide?: boolean;
}

export default function AnimatedText({
    children,
    animationClassName = "animate-text",
    className = "",
    style = {},
    slide = false,
}: AnimatedTextProps) {
    return (
        <motion.div className={`flex flex-col ${className}`} style={style}>
            {React.Children.map(children, (child, index) => {
                // console.log(child._owner);
                return typeof child === "string" ? (
                    <motion.span
                        className={animationClassName}
                        initial={{ opacity: 0, y: 20, skewY: 4 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                        viewport={{ once: true }}
                        style={{ display: "inline-block" }}
                    >
                        {child}
                    </motion.span>
                ) :
                    slide ? (
                        <motion.h1 aria-label="Let's Connect"
                            role="heading"
                            initial={{ y: "30%", opacity: 0 }}
                            whileInView={{
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.6,
                                    bounce: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {child}
                        </motion.h1>)
                        : (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    skewY: React.isValidElement(child) && ((child as CustomReactElement)._owner?.name === "AboutSection") ? 0 : 4
                                }}
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
