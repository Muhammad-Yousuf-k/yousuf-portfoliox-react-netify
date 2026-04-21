import React, { useState } from 'react';

const EducationCard = ({ certificateData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-80 h-60 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
          }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 p-6 bg-white border-2 border-gray-200 shadow-md backface-hidden rounded-xl group hover:border-blue-500 hover:shadow-xl">
          <h2 className="flex flex-col mb-2 text-2xl font-bold leading-snug text-[var(--textprimary)] ">
            {certificateData.title} <br />
            <span className='text-sm font-semibold text-[var(--textlight2)]'>{certificateData.instituteName}</span>
          </h2>
          <div className="w-12 h-1 mb-4 bg-[var(--secondary)]"></div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-[var(--textlight2)]">
              <span className="font-semibold">{certificateData.date}</span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${certificateData.status.toLowerCase() === 'completed'
                ? 'bg-green-500 text-[var(--textlight)]'
                : certificateData.status.toLowerCase() === 'in progress'
                  ? 'bg-[var(--secondary)] text-white'
                  : 'bg-gray-500 text-[var(--textlight)]'
                }`}
            >
              {certificateData.status}
            </span>
          </div>
          <p className="mt-4 text-xs text-center text-[var(--textprimary)] line-clamp-3">{certificateData.description}</p>
          <p className="mt-4 text-xs text-center text-[var(--textlight2)] transition-opacity duration-300">Hover to view certificate</p>
        </div>

        {/* Back Side */}
        {certificateData.imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-black rotate-y-180 backface-hidden bg-opacity-95 rounded-xl">
            <img
              src={certificateData.imageUrl}
              alt={certificateData.title}
              className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default EducationCard;