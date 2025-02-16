"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Startup from "@/components/Header/Startup/Startup";
import ScreenSizeDetector from "@/components/ScreenSizeDetector/ScreenSizeDetector";

export default function StartupClient({ children }: { children: React.ReactNode }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 3500);

            return () => clearTimeout(timer);
        } else {
            setShowContent(true);
        }
    }, []);

    return (
        <>
            {process.env.NEXT_PUBLIC_NODE_ENV === "production" && (
                <AnimatePresence mode="wait">
                    {!showContent ? (
                        <motion.div
                            key="startup"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Startup />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {children}
                            {process.env.NEXT_PUBLIC_NODE_ENV !== "production" && <ScreenSizeDetector />}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
            {process.env.NEXT_PUBLIC_NODE_ENV !== "production" && (
                <>
                    {children}
                    <ScreenSizeDetector />
                </>
            )}
        </>
    );
}
