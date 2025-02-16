// components/MotionTextWrapper.tsx
'use client';

import DelayedAnimationWrapper from '@/components/Animation/DelayAnimationWrapper';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionTextWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function MotionTextWrapper({ children, delay = 0, className }: MotionTextWrapperProps) {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') { delay = 0 }
  return (
    <DelayedAnimationWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    </DelayedAnimationWrapper>

  );
}