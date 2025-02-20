import AboutAnimation from '@/components/Animation/AboutAnimationText/AboutAnimation'
import AnimatedText from '@/components/Animation/AnimatedText/AnimatedText'
import React from 'react'

type Props = { words: string[][], details: string }

function Skills({ words, details }: Props) {
    return (
        <h2 className='text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px] ' role='heading' aria-label='Frontend Tools'>
            {words.map((word, wordIndex) => (
                <span
                    key={`word-${wordIndex}`}
                    aria-hidden="true"
                    className="inline-block whitespace-nowrap mr-[14px] font-bold"
                >
                    <AboutAnimation doDelay={false} dur={1} word={word} wordIndex={wordIndex} />
                </span>))}

            <AnimatedText className='mt-2'>
                <p className='font-extralight font-syne text-[0.75em] text-stone-400'>{details}</p>
            </AnimatedText>
        </h2>
    )
}

export default Skills