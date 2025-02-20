"use strict";

import React from 'react'
import AboutAnimation from '@/components/Animation/AboutAnimationText/AboutAnimation';
import AnimatedText from '@/components/Animation/AnimatedText/AnimatedText';
import { words } from '@/utils/Lists/AboutList/About';
import Skills from '@/components/UI/Skills/skills';

function AboutSection() {
    return (
        <section id="about" className='relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56 font-syne'>
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <h2
                    aria-label="I DESIGN EXPERIENCES, DEVELOP SOLUTIONS, AND ENGINEER INNOVATION."
                    role="heading"
                    className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                >
                    {words.map((word, wordIndex) => (
                        <span
                            key={`word-${wordIndex}`}
                            aria-hidden="true"
                            className="inline-block whitespace-nowrap mr-[14px]"
                        >
                            <AboutAnimation word={word} wordIndex={wordIndex} />
                        </span>
                    ))}
                </h2>
                <div className='mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20'>
                    <AnimatedText className='mb-10 flex w-[100%] flex-col gap-y-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]'>
                        <p>
                            Hola! I am software engineer with a passion for creating innovative solutions and experiences. I specialize in web development, cross-platform app development, and machine learning, delivering creative and effective solutions that exceed expectations.
                        </p>
                        <p>
                            Skilled in web, cross-platform development, and machine learning, I thrive on precision, problem-solving, and collaboration.
                        </p>
                        <p>
                            Beyond code, I find inspiration in strategy and creativity—through chess, the energy of table tennis, and the limitless worlds of fantasy novels. Staying ahead in technology fuels my passion for learning and growth.
                        </p>
                        <p>
                            Music is my escape, where soaring melodies, introspective lyrics, and timeless rhythms resonate deeply. Football is another love, where precision, strategy, and passion unite—especially when my club takes the field. <b className='font-[750]'>Hala Madrid!</b>
                        </p>
                    </AnimatedText>

                    <aside className='mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]'>
                        <div className='flex flex-col gap-4 md:gap-10'>
                            <Skills
                                words={[['F', 'R', 'O', 'N', 'T', 'E', 'N', 'D'], ['T', 'O', 'O', 'L', 'S']]}
                                details={"JavaScript, React, Next.js, TypeScript, Redux, Redux Toolkit, Jest, HTML5, NextAuth."}
                            />
                            <Skills
                                words={[['B', 'A', 'C', 'K', 'E', 'N', 'D'], ['T', 'O', 'O', 'L', 'S']]}
                                details={"Node.js, Express, MongoDB, Mongoose, Firebase, RESTful APIs, NeonDB."}
                            />
                            <Skills
                                words={[['M', 'A', 'C', 'H', 'I', 'N', 'E'], ['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G']]}
                                details={"Python, TensorFlow, Keras, Scikit-learn, NumPy, Pandas, Matplotlib."}
                            />
                            <Skills
                                words={[['O', 'T', 'H', 'E', 'R'], ['T', 'O', 'O', 'L', 'S']]}
                                details={"Flutter, Dart, Clerk, Stripe, OpenCV, Arduino, Prisma."}
                            />

                        </div>
                    </aside>
                </div>

            </div>
        </section>
    )
}

export default AboutSection

