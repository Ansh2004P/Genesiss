'use client';

import React from 'react'
import { motion } from 'framer-motion'

function Heart() {
    return (
        <motion.img
            src={'/images/Heart/image.webp'}
            alt='Heart'
            className='heartbeat md:-bottom-18 absolute -bottom-16 left-50 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]'
            width={150}
            height={150}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
    )
}

export default Heart