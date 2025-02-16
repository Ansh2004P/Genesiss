import AnimatedText from '@/components/Animation/AnimatedText/AnimatedText'
import React from 'react'

type Props = {}

function AboutSection({ }: Props) {
    return (
        <section id="about" className='relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56 font-syne'>
            <AnimatedText className='mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1300px]'>

                <h1 role="heading" className='mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-wide text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[85px] '>I DESIGN EXPERIENCES, DEVELOP SOLUTIONS, AND ENGINEER INNOVATION.</h1>
                <div className='mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla, deleniti quam perspiciatis repellat provident qui suscipit cumque quisquam facere aliquid velit vel enim dolore commodi nam! Ex, ea magnam?</p>
                </div>
            </AnimatedText>
        </section>
    )
}

export default AboutSection