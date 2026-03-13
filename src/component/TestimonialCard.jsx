import React from "react";

const TestimonialCard = ({ name, email, text, img }) => {
  return (
    <div className="relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-[340px] md:h-[380px] w-[280px] sm:w-[320px] md:w-[380px] gap-4 md:gap-5 border border-gray-100 hover:border-blue-200 group">
      {/* Quote icon background */}
      <div className="absolute font-serif text-4xl leading-none transition-colors duration-300 select-none top-4 right-4 md:top-6 md:right-6 md:text-6xl text-blue-50 group-hover:text-blue-100">
        "
      </div>

      {/* Profile section */}
      <div className="flex items-center gap-3 md:gap-4">
        <div className="relative">
          <img
            src={img || "/assets/icon/burger.svg"}
            alt={name}
            className="object-cover w-12 h-12 transition-all duration-300 rounded-full md:w-16 md:h-16 ring-4 ring-blue-100 group-hover:ring-blue-200"
          />
          {/* Online indicator dot */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full md:w-4 md:h-4"></div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-base md:text-lg font-bold text-gray-800 truncate max-w-[160px] sm:max-w-[200px]">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 truncate max-w-[160px] sm:max-w-[200px]">
            {email}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Testimonial text */}
      <div className="relative flex-1 overflow-hidden">
        <p className="h-full pr-2 overflow-y-auto text-sm leading-relaxed text-gray-600 md:text-base scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
          {text}
        </p>
      </div>

      {/* Star rating */}
      <div className="flex gap-1 mt-auto">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current md:w-5 md:h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;