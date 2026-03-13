import { useEffect, useRef, useState } from "react";
import SectionTop001 from "../component/SectionTop001";
import TestimonialCard from "../component/TestimonialCard";
import useData from "../hooks/useData";

const TestimonialSection = () => {
  const { testimonialsData } = useData();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const cardWidth = scrollContainer.scrollWidth / testimonialsData.length;
    let scrollInterval;

    scrollInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % testimonialsData.length;
        scrollContainer.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, [isPaused, testimonialsData.length]);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.scrollWidth / testimonialsData.length;
    scrollContainer.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <div
      id="testimonial"
      className="relative w-full py-12 overflow-hidden md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-blue-100 rounded-full md:w-72 md:h-72 filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full md:w-96 md:h-96 filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <SectionTop001 name="Testimonials" />

        {/* Gradient fade edges for scroll hint */}
        <div className="relative w-full max-w-[95%] mx-auto pt-10">
          <div className="absolute top-0 bottom-0 left-0 z-10 w-10 pointer-events-none md:w-20 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 z-10 w-10 pointer-events-none md:w-20 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent"></div>

          <div
            ref={scrollRef}
            className="flex gap-4 px-4 pb-4 overflow-x-auto md:gap-6 md:px-8 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {testimonialsData.map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 snap-center">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex gap-2 mt-6 md:mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                ? "bg-blue-500 w-6 md:w-8"
                : "bg-gray-300 hover:bg-blue-300"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Pause/Play indicator (optional) */}
        {/* <div className="mt-4 text-xs text-gray-400 md:text-sm">
          {isPaused ? "⏸ Paused" : "▶ Auto-scrolling"}
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSection;