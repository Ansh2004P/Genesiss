import React from 'react'
import AnimatedText from '@/components/Animation/AnimatedText/AnimatedText';
import Heart from '@/components/UI/HeartBeat/Heart';
import Link from 'next/link';
import MagneticButton from '@/components/UI/MagneticButton/MagneticButton';


function ContactSection() {
    return (
        <section
            id="contact"
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 my-4"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                <div className="flex flex-col justify-center relative w-full items-center lg:max-w-[1440px] ">
                    <AnimatedText slide={true}>
                        <span className="flex max-w-[500px] flex-col items-center text-left text-[55px] font-extrabold uppercase leading-[2em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[70px] md:text-[90px] lg:text-center lg:text-[130px] xl:text-[160px]">
                            <span className="flex items-center justify-center overflow-hidden last:-mr-10">
                                <span className="-mb-4 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4 transform scale-y-[1.7]">
                                    Let&apos;s&nbsp;
                                </span>
                            </span>
                            <span className="flex items-center justify-center overflow-hidden last:-mr-10">
                                <span className="-mb-4 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4 transform scale-y-[1.7]">
                                    Connect&nbsp;
                                </span>
                            </span>
                        </span>
                    </AnimatedText>
                    <Heart />
                </div>
                <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className=' flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]'>
                        <p aria-label='Got a question, proposal, project, or want to work together on something?' role="heading" aria-level={1} aria-hidden="true">
                            Got a question, proposal, project, or want to work together on something?
                        </p>
                        <Link className='mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4'
                            href={"mailto:anshkpatel21@gmail.com?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."}
                            aria-label="Send me an email"
                            target="_blank"
                        >
                            <p aria-label="Send me an email" role="heading" aria-level={2} aria-hidden="true">Send me an email</p>
                        </Link>
                    </div>
                    <div className='flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]'>
                        <MagneticButton
                            ariaLabel="Visit GitHub Profile"
                            content="GH"
                            link="https://github.com/Ansh2004P"
                            styles="p-3 rounded-lg font-Asgard cursor-none text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                        />
                        <MagneticButton
                            ariaLabel="Visit LinkedIn Profile"
                            content="LN"
                            link="https://www.linkedin.com/in/anshpatel2004/"
                            styles="p-3 rounded-lg font-Asgard cursor-none text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                        />
                        <MagneticButton
                            ariaLabel="Read My Blog"
                            content="LT"
                            link="https://linktr.ee/anshpatel07"
                            styles="p-3 rounded-lg font-Asgard cursor-none text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                        />
                    </div>
                </div>
            </div>
        </section >

    )
}

export default ContactSection
