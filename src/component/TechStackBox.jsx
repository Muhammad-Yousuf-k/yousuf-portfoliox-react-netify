import React from 'react'

const TechStackBox = ({ techStacks }) => {
  return (
    <div
      className="w-[90%] sm:w-[40%]  overflow-hidden transition-all duration-300 bg-white border-2 border-gray-100 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Stack Header */}
      <div className="bg-gradient-to-r from-[#333333] to-[#505050] px-6 py-5">
        <h2 className="text-3xl font-bold text-[var(--textlight)] exo2 tracking-tight">
          {techStacks.title}
        </h2>
      </div>

      {/* Tech Items */}
      <div className="p-5 space-y-4">
        {techStacks.data.map((e, idx2) => (
          <div
            key={idx2}
            className="group relative bg-[var(--light)] hover:bg-white border-2 border-transparent hover:border-[var(--secondary)] rounded-xl p-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              {/* Logo Container */}
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 p-2 transition-shadow duration-300 bg-white shadow-sm rounded-xl group-hover:shadow-md">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d={e.logo} className="text-[var(--textprimary)]" />
                </svg>
              </div>

              {/* Info Container */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-[var(--textprimary)] exo2 truncate">
                    {e.name}
                  </h3>
                  <span className="text-sm font-semibold text-[var(--secondary)] ml-2 whitespace-nowrap">
                    {e.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--secondary)] to-[#ff7070] rounded-full transition-all duration-500 ease-out"
                    style={{ width: e.prograss }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>

                {/* Percentage Text (optional) */}
                <div className="mt-1 text-xs text-[var(--textlight2)] font-medium">
                  {e.prograss}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackBox