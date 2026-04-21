// HeroSkeleton.jsx
import React from 'react';

const HeroSkeleton = () => {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse sm:flex-row gap-10 justify-center items-center h-[1000px] sm:h-[100vh] w-full overflow-hidden bg-[var(--light)]"
    >
      {/* Left Section Skeleton */}
      <div className="flex flex-col items-start justify-center w-full sm:w-1/2 md:w-1/2 xl:w-[40%] h-full gap-5 p-5">
        {/* Sub heading skeleton */}
        <div className="w-32 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        
        {/* Main heading skeleton */}
        <div className="flex flex-col w-full gap-3">
          <div className="w-4/5 h-14 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="w-3/5 h-14 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>

        {/* Paragraph skeleton */}
        <div className="flex flex-col w-full gap-2 mt-2">
          <div className="w-full h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="w-5/6 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="w-4/5 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>

        {/* Buttons skeleton */}
        <div className="flex gap-5 mt-4">
          <div className="w-32 h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
          <div className="w-36 h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        </div>
      </div>

      {/* Right Section Skeleton */}
      <div className="relative flex items-center justify-center w-full sm:w-1/2 md:w-1/2 xl:w-[40%] h-full p-5">
        {/* Main image skeleton */}
        <div className="absolute z-10 w-[90%] xl:w-[80%] aspect-square bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        
        {/* Secondary decorative skeleton */}
        <div className="absolute z-20 w-[90%] xl:w-[80%] aspect-square">
          
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSkeleton;