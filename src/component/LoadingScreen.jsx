// LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[var(--light)] via-white to-[var(--light)] flex items-center justify-center z-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--primary)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative flex flex-col items-center gap-12">
        {/* Main loader circle with progress */}
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <svg className="w-32 h-32 -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="var(--primary)"
              strokeWidth="3"
              fill="none"
              opacity="0.1"
            />
            {/* Animated progress circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="351.86"
              strokeDashoffset="351.86"
              className="animate-loading-progress"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--secondary)" />
                <stop offset="100%" stopColor="var(--primary)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center icon/logo placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-[var(--secondary)] rounded-lg rotate-45 animate-pulse"></div>
              <div className="absolute inset-0 w-12 h-12 border-4 border-[var(--primary)] rounded-lg -rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Loading text with animated gradient */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="exo2 text-2xl font-bold bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
            Loading Portfolio
          </h2>

          {/* Subtle loading indicator */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 bg-[var(--secondary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-[var(--secondary)] rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
              <span className="w-2 h-2 bg-[var(--secondary)] rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% {
            stroke-dashoffset: 351.86;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-loading-progress {
          animation: loading-progress 2s ease-in-out infinite;
        }

        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;