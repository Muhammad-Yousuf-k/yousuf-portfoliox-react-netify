import React from "react";
import EducationCard  from "../component/EducationCard";

const ShowCaseBottom = ({
  currentView,
  projectData,
  certificateData,
  techStackFrontendData,
  techStackBackendData,
  techStackOtherData,
}) => {
  const techStacks = [
    { title: "Frontend", data: techStackFrontendData },
    { title: "Backend", data: techStackBackendData },
    { title: "Other", data: techStackOtherData },
  ];

  return (
    <>
      {/* Projects View */}
      {currentView === "project" && (
        <div id="proj" className="w-full flex justify-center overflow-hidden h-[60vh]">
          <div className="w-[90%] h-full p-5 overflow-y-scroll flex flex-wrap justify-center gap-3 scroll-none">
            {projectData.map((e, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-300 shadow-2xl showCase-FadeIn-Up w-80 sm:w-90 h-100 rounded-4xl"
              >
                {/* Card top */}
                <div className="w-full h-[40%] border border-gray-300 rounded-4xl overflow-hidden">
                  <img
                    className="object-cover w-full h-full rounded-4xl"
                    src={e.img}
                    alt={e.ProjName}
                  />
                </div>
                {/* Card bottom */}
                <div className="w-full h-[60%] p-1">
                  <div className="w-full h-[25%] flex items-center px-5">
                    <h1 className="bg-[var(--secondary)] text-white px-3 py-1 rounded-2xl flex items-center">
                      {e.ProjStatus}
                    </h1>
                  </div>
                  <div className="w-full h-[55%] flex flex-col gap-2 justify-center px-5">
                    <h1 className="flex items-center justify-between text-3xl exo2">
                      {e.ProjName}
                      <a href={e.ProjLink} target="_blank" rel="noopener noreferrer">
                        <svg className="w-12 p-1 transition-all hover:-rotate-45 hover:bg-[var(--secondary)] rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                          <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                        </svg>
                      </a>
                    </h1>
                    <p className="text-xl truncate">{e.ProjDescription}</p>
                  </div>
                  <div className="w-full h-[20%] flex gap-2 items-center px-5">
                    {e.ProjStack.map((stack, i) => (
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
            ))}
          </div>
        </div>
      )}

      {/* Certificates View */}
      {currentView === "certificate" && (
        // <div id="certificate" className="w-full h-[60vh] overflow-y-scroll p-5 flex flex-wrap justify-center gap-6 scroll-none">
        //   {certificateData.map((e, idx) => (
        //     <div
        //       key={idx}
        //       className="group relative bg-white border-2 border-[var(--light)] hover:border-[var(--secondary)] transition-all duration-300 showCase-FadeIn-Up w-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl"
        //     >
        //       {/* Top accent stripe */}
        //       {/* <div className="h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]"></div> */}

        //       {/* Card Content */}
        //       <div className="p-6">
        //         {/* Degree Name */}
        //         <h1 className="text-2xl font-bold exo2 text-[var(--textprimary)] mb-2 leading-snug">
        //           {e.degreeName}
        //         </h1>

        //         {/* Institute */}
        //         <p className="text-[var(--textlight2)] font-medium mb-4">
        //           {e.instituteName}
        //         </p>

        //         {/* Divider */}
        //         <div className="w-12 h-1 bg-[var(--secondary)] mb-4"></div>

        //         {/* Date and Status Row */}
        //         <div className="flex items-center justify-between mb-6">
        //           <div className="text-sm text-[var(--textlight2)]">
        //             <span className="font-semibold">{e.startDate}</span>
        //             <span className="mx-2">-</span>
        //             <span className="font-semibold">{e.endDate}</span>
        //           </div>
        //           <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${e.status.toLowerCase() === 'completed'
        //               ? 'bg-green-500 text-white'
        //               : e.status.toLowerCase() === 'in progress'
        //                 ? 'bg-[var(--secondary)] text-white'
        //                 : 'bg-[var(--textlight2)] text-white'
        //             }`}>
        //             {e.status}
        //           </span>
        //         </div>

        //         {/* Button */}
        //         <button className="w-full bg-[var(--textprimary)] hover:bg-[var(--secondary)] text-white font-bold py-3 rounded-lg transition-all duration-200 active:scale-[0.98] group-hover:shadow-lg">
        //           Learn More
        //         </button>
        //       </div>
        //     </div>
        //   ))}
        // </div>
        <EducationCard/>
      )}

      {/* Tech Stack View */}
      {currentView === "techStack" && (
        <div id="techStack" className="w-full h-[60vh] overflow-y-scroll p-5 flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-4 scroll-none">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="border w-full lg:w-[40%] shrink-0 p-3 shadow-xl rounded">
              <div className="flex justify-center w-full py-2">
                <h1 className="text-5xl font-bold exo2">{stack.title}</h1>
              </div>
              <div className="flex flex-col w-full gap-3 rounded">
                {stack.data.map((e, idx2) => (
                  <div key={idx2} className="flex items-center border rounded w-full h-[90px] px-2">
                    <svg className="w-[70px] h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path d={e.logo} />
                    </svg>
                    <div className="flex flex-col justify-center w-full">
                      <h1 className="text-3xl font-bold exo2">{e.name}</h1>
                      <p className="text-xl">{e.level}</p>
                      <div className="w-full bg-gray-400 rounded">
                        <div
                          className="h-4 rounded bg-[var(--secondary)]"
                          style={{ width: e.prograss }} // dynamic width
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowCaseBottom;