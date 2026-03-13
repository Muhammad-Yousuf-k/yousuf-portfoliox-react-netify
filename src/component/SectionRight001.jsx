import React from "react";

const SectionRight001 = ({ img0, imgAlt0, img1, imgAlt1 }) => {
  return (
    <div className="relative flex items-center justify-center w-full sm:w-1/2 md:w-1/2 xl:w-[40%] h-full p-5">
      {/* Main image */}
      <img
        className="Hero-FadeIn-Ap heroimg absolute z-10 w-[90%] xl:w-[80%] rounded"
        src={img0}
        alt={imgAlt0}
        loading="lazy"
      />
      {/* Optional secondary image */}
      {img1 && (
        <img
          className="Hero-FadeIn-Up absolute z-20 w-[90%] xl:w-[80%]"
          src={img1}
          alt={imgAlt1}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default SectionRight001;