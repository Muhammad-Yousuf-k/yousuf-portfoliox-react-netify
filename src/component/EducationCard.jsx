import React, { useState } from 'react';

const EducationCard = ({ certificateData }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className="relative overflow-hidden transition-all duration-300 bg-white border-2 border-gray-200 shadow-md h-60 group hover:border-blue-500 w-80 rounded-xl hover:shadow-xl"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      {/* Certificate Image Overlay - Shows on Hover */}
      {showImage && certificateData.imageUrl && (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-95">
          <img
            src={certificateData.imageUrl}
            alt={certificateData.title}
            className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Certificate Title */}
        <h2 className="mb-2 text-2xl font-bold leading-snug text-gray-800">
          {certificateData.title}
        </h2>

        {/* School Name */}
        <p className="mb-4 font-medium text-gray-600">
          {certificateData.school}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 mb-4 bg-blue-500"></div>

        {/* Date and Status Row */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{certificateData.date}</span>
          </div>

          {/* Status Badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${certificateData.status.toLowerCase() === 'completed'
              ? 'bg-green-500 text-white'
              : certificateData.status.toLowerCase() === 'in progress'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-500 text-white'
              }`}
          >
            {certificateData.status}
          </span>
        </div>

        {/* Hover Hint */}
        <p className="mt-4 text-xs text-center text-gray-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          Hover to view certificate
        </p>
      </div>
    </div>
  );
};


export default EducationCard;