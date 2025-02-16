'use client';
import Magnetic from '@/components/StickyCursor/Magnetic.tsx/magnetic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DelayedAnimationWrapper from '@/components/Animation/DelayAnimationWrapper/index';

function MagneticButton({ styles, ariaLabel, link, content }: { styles: string, ariaLabel: string, link: string, content: string }) {
    return (
        <DelayedAnimationWrapper useDefaultTransition={false}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? 0 : 2, duration: 0.6, ease: "easeOut" }}
            >
                <Magnetic>
                    <button className={styles}>
                        <Link href={link} rel="noopener noreferrer" target="_blank">
                            <span
                                aria-label={ariaLabel}
                                className="font-bold text-AAprimary 
                                    cursor-none"
                            >
                                {content}
                            </span>
                        </Link>
                    </button>
                </Magnetic>
            </motion.div>
        </DelayedAnimationWrapper>
    );
}

export default MagneticButton;
