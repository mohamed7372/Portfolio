import React, { useEffect, useState } from "react";
import TitleSection from "../ui/TitleSection";
import worksData from "../../data/works.json";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Work = () => {
  const [selectWork, setSelectWork] = useState(worksData[0]);

  const handleSelectWork = (event, item) => {
    setSelectWork(item);
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  if (selectWork === undefined) return null;

  return (
    <div
      className="responsive flex flex-col justify-center items-center h-screen"
      id="experience"
    >
      <div className="w-full" data-aos="fade-right">
        <TitleSection nbr={"02"} title={"Where I've Worked"} width="64" />
      </div>
      <div className="flex flex-col md:flex-row h-fit w-full">
        <ul
          className="mr-14 md:block justify-center mb-4 md:mb-0 md:w-[200px] w-full grid grid-cols-3"
          data-aos="fade-right"
        >
          {worksData.map((work, idx) => (
            <li
              key={idx}
              onClick={(event) => handleSelectWork(event, work)}
              className={`capitalize text-xs md:text-sm border-b-2 border-l-0 md:border-b-0 md:border-l-2 cursor-pointer hover:bg-blue-800 hover:bg-opacity-20 duration-700
                                ${
                                  work.company === selectWork.company
                                    ? "text-primary-200 border-primary-200"
                                    : "border-secondary-200 border-opacity-20"
                                } px-3 py-3`}
            >
              {work.company}
            </li>
          ))}
        </ul>
        <div className={`mt-2.5 w-full`} data-aos="fade-left">
          <h3 className="text-secondary-100 font-bold capitalize">
            {selectWork.position}
            <span className="text-primary-200 ml-3">@{selectWork.company}</span>
          </h3>
          <h6 className="text-xs mt-2">{selectWork.date}</h6>
          <ul className="mt-4 ">
            {selectWork.tasks.map((task, idx) => (
              <li key={idx} className="text-sm py-1 flex items-start">
                <div className="mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#64ffda"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
