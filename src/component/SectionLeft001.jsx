import React from "react";

const SectionLeft001 = ({
  mainHead,
  subHead,
  para,
  btn1,
  btn2,
  btn1Link = "#",
  btn2Link = "#",
}) => (
  <div className="flex flex-col items-start justify-center w-full sm:w-1/2 md:w-1/2 xl:w-[40%] h-full gap-5 p-5 text-xl xl:text-2xl 2xl:text-5xl ">
    {/* Headings */}
    <div className="flex flex-col gap-5">
      <h2 className="Hero-FadeIn-l text-[var(--textsecondary)] mb-[-20px] text-left text-[0.8em] font-bold">
        {subHead}
      </h2>
      <h1 className="exo2 text-6xl font-bold Hero-FadeIn-l text-[var(--textprimary)] text-[3.5em]">
        {mainHead}
      </h1>
    </div>

    {/* Paragraph */}
    <p className="Hero-FadeIn-l text-[var(--textlight2)] text-[0.7em]">{para}</p>

    {/* Buttons */}
    <div className="flex gap-5 Hero-FadeIn-l">
      <a href={btn1Link}>
        <button className="active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--textlight)] px-6 py-3 rounded text-[0.6em]">
          {btn1}
        </button>
      </a>
      <a href={btn2Link} className="flex items-center">
        <button className="active:scale-95 font-bold text-[var(--textprimary)] hover:text-[var(--textsecondary)] flex items-center gap-2 text-[0.6em]">
          {btn2} <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </a>
    </div>
  </div>
);

export default SectionLeft001;