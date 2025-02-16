import ProjectLinkButton from '@/components/ProjectLinkButton/ProjectLinkButton'
import Image from 'next/image'
import React, { Suspense } from 'react'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import AnimatedText from '@/components/Animation/AnimatedText/AnimatedText';

type Props = {
    index: number,
    title: string,
    description: string,
    techStack: string[],
    img?: string | undefined,
    liveLink?: string | undefined,
    githubLink: string,
}

function ProjectContainer({ index, title, description, techStack, img, githubLink, liveLink }: Props) {
    return (
        <div className={`w-full max-w-[90%] lg:max-w-[80%] min-h-[450px] md:min-h-[500px] bg-zinc-800 rounded-[2.5rem] flex flex-col md:flex-row font-syne 
            ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} shadow-lg p-4 md:p-0`}>

            {/* Content Section */}
            <div className='relative flex flex-col justify-center w-full md:w-[70%] p-6 md:p-8 gap-y-6 md:gap-y-10'>

                {/* Links (GitHub & Live) */}
                <div className={`absolute flex flex-wrap items-center w-auto gap-3 sm:gap-4 right-4 top-6 
                    ${index % 2 === 1 ? 'md:right-8' : 'md:left-8'}`}>
                    <ProjectLinkButton icon={faGithub} link={githubLink} />
                    {liveLink && <ProjectLinkButton icon={faLink} link={liveLink} />}
                </div>

                {/* Text Content */}

                <AnimatedText className='flex flex-col items-start gap-y-4 md:gap-y-6 w-full'>
                    <h1 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold flex flex-wrap w-auto sm:w-[80%] min-w-0 leading-tight break-normal sm:whitespace-pre-wrap whitespace-normal">
                        {title}
                    </h1>

                    <p className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-descriptionColor w-full md:w-[85%]'>
                        {description}
                    </p>
                    <div className='flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full'>
                        {techStack.map((tech) => (
                            <span key={index + tech} className='text-sm sm:text-lg md:text-xl font-semibold pr-6 py-1 rounded-lg'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </AnimatedText>
            </div>

            {/* Image Section */}
            {img && <div className='relative flex items-center justify-center w-full md:w-[65%] h-[250px] sm:h-[300px] md:h-auto rounded-b-[2.5rem] md:rounded-none'>
                <Suspense fallback={<div className='w-full h-full bg-zinc-800 animate-pulse' />}>
                    <Image
                        src={img || "/images/ProfilePic/Profile_Pic_10241224141.jpg"}
                        alt="Project preview"
                        width={250}
                        height={250}
                        className={`object-cover w-full h-full 
                        ${index % 2 === 0 ? 'md:rounded-r-[2.5rem]' : 'md:rounded-l-[2.5rem]'}`}
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                </Suspense>
            </div>}

        </div>
    )
}

export default ProjectContainer;
