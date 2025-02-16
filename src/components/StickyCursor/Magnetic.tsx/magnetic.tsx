'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Magnetic({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: { clientX: number; clientY: number }) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = (clientX - (left + width / 2)) * 0.3; // Reduced movement factor
        const middleY = (clientY - (top + height / 2)) * 0.3; // Reduced movement factor
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{
                type: "spring",
                stiffness: 100,  // Reduced stiffness
                damping: 20,    // Increased damping
                mass: 0.2,      // Slightly increased mass
            }}
        >
            {children}
        </motion.div>
    );
}