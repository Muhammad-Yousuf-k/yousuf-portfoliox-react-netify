import React from 'react'
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ projectData }) => {
    const IconComponent = ArrowRight;

    return (
        <div
            className="bg-white border border-gray-300 shadow-2xl showCase-FadeIn-Up w-80 sm:w-90 h-100 rounded-4xl"
        >
            {/* Card top */}
            <div className="w-full h-[40%] border border-gray-300 rounded-4xl overflow-hidden">
                <img
                    className="object-cover w-full h-full rounded-4xl"
                    src={projectData.img}
                    alt={projectData.ProjName}
                />
            </div>
            {/* Card bottom */}
            <div className="w-full h-[60%] p-1">
                <div className="w-full h-[25%] flex items-center px-5">
                    <h1 className="bg-[var(--secondary)] text-white px-3 py-1 rounded-2xl flex items-center">
                        {projectData.ProjStatus}
                    </h1>
                </div>
                <div className="w-full h-[55%] flex flex-col gap-2 justify-center px-5">
                    <h1 className="flex items-center justify-between text-3xl exo2">
                        {projectData.ProjName}
                        <a href={projectData.ProjLink} target="_blank" rel="noopener noreferrer">
                            <IconComponent className="w-11 h-11 text-[var(--textprimary)] hover:text-[var(--textlight)] p-1 transition-all hover:-rotate-45 hover:bg-[var(--secondary)] rounded-full cursor-pointer" strokeWidth={2} />
                        </a>
                    </h1>
                    <p className="text-xl truncate">{projectData.ProjDescription}</p>
                </div>
                <div className="w-full h-[20%] flex gap-2 items-center px-5">
                    <h2

                        className="flex items-center px-3 py-1 text-white bg-gray-500 rounded-2xl"
                    >
                        {projectData.ProjStack}
                    </h2>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard