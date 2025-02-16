"use client"; // Mark this as a Client Component

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Startup = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 500); // Increased delay before showing text

        const exitTimer = setTimeout(() => { }, 2500); // Increased overall duration

        return () => {
            clearTimeout(textTimer);
            clearTimeout(exitTimer);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: "100vh",
                transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
            }}
            className="absolute w-full h-screen flex justify-center items-center bg-StartupBackground z-20"
        >
            {/* Text Container */}
            <motion.div
                className="accent-AAprimary text-center flex justify-center items-center 
                gap-x-2 sm:gap-x-4 md:gap-x-6 overflow-hidden 
                text-xl sm:text-2xl md:text-3xl font-Asgard font-extrabold"

                initial={{ opacity: 0 }}
                animate={{
                    opacity: showText ? 1 : 0,
                    transition: { duration: 0.8, ease: "easeInOut" },
                }}
            >
                {/* Developer (Last to Exit) */}
                <motion.div
                    initial={{
                        y: "100vh",
                        opacity: 0,
                        transform: "translate(0px, 70px) skew(0deg, 40deg)", // Skew from the left
                        transformOrigin: "left", // Skew starts from the left
                    }}
                    animate={{
                        y: showText ? 0 : "100vh",
                        opacity: showText ? 1 : 0,
                        transform: showText ? "translate(0px, 0px) skew(0deg, 0deg)" : "translate(0px, 70px) skew(0deg, 40deg)",
                        transition: { delay: 0.3, duration: 1, ease: "easeInOut" },
                    }}
                    exit={{
                        y: "100vh",
                        opacity: 0,
                        transform: "translate(0px, 70px) skew(20deg, 40deg)",
                        transformOrigin: "right", // Skew starts from the left
                        transition: { delay: 0.6, duration: 0.8, ease: "easeInOut" },
                    }}
                    style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                    }}
                >
                    Creator,
                </motion.div>

                {/* Coder */}
                <motion.div
                    initial={{
                        y: "100vh",
                        opacity: 0,
                        transform: "translate(0px, 70px) skew(0deg, 40deg)", // Skew from the left
                        transformOrigin: "left", // Skew starts from the left
                    }}
                    animate={{
                        y: showText ? 0 : "100vh",
                        opacity: showText ? 1 : 0,
                        transform: showText ? "translate(0px, 0px) skew(0deg, 0deg)" : "translate(0px, 70px) skew(0deg, 40deg)",
                        transition: { delay: 0.8, duration: 1, ease: "easeInOut" },
                    }}
                    exit={{
                        y: "100vh",
                        opacity: 0,
                        transform: "translate(0px, 70px) skew(0deg, 40deg)",
                        transformOrigin: "left",
                        transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" },
                    }}
                >
                    Coder,
                </motion.div>

                {/* Innovator (First to Exit) */}
                <motion.div
                    initial={{
                        y: "100vh",
                        opacity: 0,
                        transform: "translate(0px, 70px) skew(0deg, 40deg)", // Skew from the left
                        transformOrigin: "left", // Skew starts from the left
                    }}
                    animate={{
                        y: showText ? 0 : "100vh",
                        opacity: showText ? 1 : 0,
                        transform: showText ? "translate(0px, 0px) skew(0deg, 0deg)" : "translate(0px, 70px) skew(0deg, 40deg)",
                        transition: { delay: 1.5, duration: 1, ease: "easeInOut" },
                    }}
                    exit={{
                        y: "100vh",
                        opacity: 0,
                        transform: "translate(0px, 70px) skew(0deg, 40deg)",
                        transformOrigin: "left",
                        transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
                    }}
                >
                    Innovator.
                </motion.div>
            </motion.div>
        </motion.div >
    );
};

export default Startup;
