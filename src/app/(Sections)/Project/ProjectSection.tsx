import ProjectContainer from '@/components/UI/ProjectContainer/ProjectContainer'
import { workList } from '@/utils/workList/workList'
import React from 'react'


function ProjectSection() {
    return (
        <section id="project" className="flex flex-col items-center relative justify-center w-screen py-4 -h-full gap-y-20 bg-StartupBackground">
            {workList.map((project, index) => (
            <ProjectContainer key={index} index={index} {...project} />
            ))}
        </section>
    )
}

export default ProjectSection