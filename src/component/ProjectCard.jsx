import React from 'react'

const ProjectCard = ({ projectData }) => {
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
                            <svg className="w-12 p-1 transition-all hover:-rotate-45 hover:bg-[var(--secondary)] rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                            </svg>
                        </a>
                    </h1>
                    <p className="text-xl truncate">{projectData.ProjDescription}</p>
                </div>
                <div className="w-full h-[20%] flex gap-2 items-center px-5">
                    {projectData.ProjStack.map((stack, i) => (
                        <h2
                            key={i}
                            className="flex items-center px-3 py-1 text-white bg-gray-500 rounded-2xl"
                        >
                            {stack}
                        </h2>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard