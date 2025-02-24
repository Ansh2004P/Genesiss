'use client';
import React from 'react';
import { motion } from 'framer-motion';
import DelayedAnimationWrapper from '@/components/Animation/DelayAnimationWrapper';
import Magnetic from '@/components/StickyCursor/Magnetic.tsx/magnetic';
import Image from 'next/image';

function HeroArea() {
    return (
        <div className="relative flex flex-col items-center justify-between w-full h-screen z-10 md:mt-12 lg:mt-0 mt-20">

            {/* Container for name and image */}
            <div className="flex flex-col items-center justify-center relative top-[8%]">

                {/* First Name Animation */}
                <div className='overflow-hidden'>
                    <DelayedAnimationWrapper useDefaultTransition={false} delay={0}>
                        <motion.h1
                            initial={{ y: "100%", opacity: 1 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? 0 : 1.5,
                                    duration: 0.6,
                                    bounce: 0.5
                                },
                            }}
                            className="text-[4rem] sm:text-[6em] lg:text-[8em] text-AAprimary font-[900] font-MonaSans text-center leading-[0.85]"
                        >
                            ANSH
                        </motion.h1>
                    </DelayedAnimationWrapper>
                </div>

                {/* Last Name Animation */}
                <div className='overflow-hidden'>
                    <DelayedAnimationWrapper useDefaultTransition={false}>
                        <motion.h1
                            initial={{ y: "100%", opacity: 1 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? 0 : 1.5,
                                    duration: 0.6,
                                    bounce: 0.5
                                },
                            }}
                            className="text-[6rem] sm:text-[8rem] lg:text-[12rem] text-AAprimary font-[900] font-MonaSans text-center leading-[0.85]"
                        >
                            PATEL
                        </motion.h1>
                    </DelayedAnimationWrapper>
                </div>

                {/* Profile Picture - Now positioned absolutely over the text */}
                <div className="absolute top-[60%] bottom-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <DelayedAnimationWrapper useDefaultTransition={false} >
                        <Magnetic>
                            <motion.div
                                initial={{ y: "20%", opacity: 0, scale: 0.5 }}
                                animate={{
                                    y: 0,
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? 0 : 1.8,
                                        duration: 0.6,
                                        bounce: 0.5,
                                        ease: "easeInOut",
                                    },
                                }}
                                className="flex justify-center items-center"
                            >
                                <Image
                                    id="profile-pic"
                                    src="/images/ProfilePic/Profile_Pic_1024122414.jpg"
                                    alt="Profile Picture"
                                    width={200}
                                    height={200}
                                    className="rounded-2xl object-cover filter grayscale transition-all duration-500 hover:filter-none w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] lg:w-[200px] lg:h-[200px] "
                                    priority
                                />
                            </motion.div>
                        </Magnetic>
                    </DelayedAnimationWrapper>
                </div>

            </div>

        </div>
    );
}

export default HeroArea;