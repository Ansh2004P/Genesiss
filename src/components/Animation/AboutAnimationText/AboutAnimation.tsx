"use client";
import React from 'react'
import { motion } from 'framer-motion'
type Props = { word: string[]; wordIndex: number; doDelay?: boolean, dur?: number }

export default function AboutAnimation({ word, wordIndex, doDelay = true, dur = 0.5 }: Props) {
    return (
        word.map((char, charIndex) => (
            <motion.span
                key={`char-${wordIndex}-${charIndex}`}
                aria-hidden="true"
                className="inline-block mr-[0.001em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: dur,
                    delay: doDelay ? wordIndex * 0.2 + charIndex * 0.05 : 0,
                }}
            >
                {char}
            </motion.span>
        ))
    )
}