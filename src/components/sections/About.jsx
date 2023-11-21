import React, { useEffect } from "react";
import languageData from "../../data/languages.json";
import softwareData from "../../data/softwares.json";
import TitleSection from "../ui/TitleSection";
import ImgProfil from "../../assets/img/mine.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div
      className="responsive flex flex-col justify-center items-center min-h-screen"
      id="about"
    >
      <div className="w-full" data-aos="fade-right">
        <TitleSection nbr={"01"} title={"About Me"} width="36" />
      </div>
      <div className="flex flex-col md:flex-row h-fit">
        <div data-aos="fade-up" className="w-full md:w-2/3">
          <p className="text-center md:text-left">
            Welcome! My name is{" "}
            <span className="font-extrabold">BENRABAH Mohamed</span> and I enjoy
            creating things that live online. My interest in{" "}
            <span className="text-primary-200">
              {" "}
              web development started in 2021
            </span>{" "}
            when I decided to try building a website for my graduation project.
          </p>
          <p className="mt-4 text-center md:text-left">
            I loved the field a lot and gave it a lot of time to develop my
            skills, as I learned well by working on projects for our club
            <a
              className="text-primary-200 hover:underline ml-1"
              href="https://microclub.tech/"
            >
              'Micro Club'
            </a>
            . I am still learning new things as I find fun in discovering new
            skills.
          </p>
          <p className="mt-4 text-center md:text-left">
            Also, I am in the process of launching{" "}
            <span className="text-primary-200">my own project</span> on{" "}
            <span className="text-primary-200">YouTube</span> and{" "}
            <span className="text-primary-200">Spotify</span>{" "}
            <span className="text-secondary-100 font-bold">SOON</span>.
          </p>
          <p className="mt-4 text-center md:text-left">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="mt-4 grid grid-cols-3 md:grid-cols-4 w-full">
            {languageData.map((lang, idx) => (
              <li key={idx} className="text-sm py-1 flex items-center">
                <div className="mr-2">
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
                {lang.name}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center md:text-left">
            Here are a few Softwares I’ve been working:
          </p>
        </div>
        <div
          className="w-64 h-[400px] border-2 rounded-md border-primary-200 relative ml-14 mt-4 hidden md:block"
          data-aos="fade-left"
        >
          <img
            src={ImgProfil}
            alt="benrabah mohamed"
            className="object-cover object-left bg-secondary-200 absolute h-full w-full -left-4 -top-4 rounded-lg"
          />
          <div className="bg-primary-200 bg-opacity-25 absolute h-full w-full -left-4 -top-4 rounded-lg cursor-pointer hover:bg-opacity-0"></div>
        </div>
      </div>

      <ul
        className="mt-4 grid grid-cols-3 md:grid-cols-5 w-full"
        data-aos="fade-right"
      >
        {softwareData.map((soft, idx) => (
          <li key={idx} className="text-sm py-1 flex items-center">
            <div className="mr-2">
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
            {soft.name}
          </li>
        ))}
      </ul>

      <div
        className="mt-14 w-64 h-[400px] border-2 rounded-md border-primary-200 relative md:ml-14 md:hidden block"
        data-aos="fade-up"
      >
        <img
          src={ImgProfil}
          alt="benrabah mohamed"
          className="object-cover object-left bg-secondary-200 absolute h-full w-full -left-4 -top-4 rounded-lg"
        />
        <div className="bg-primary-200 bg-opacity-25 absolute h-full w-full -left-4 -top-4 rounded-lg cursor-pointer hover:bg-opacity-0"></div>
      </div>
    </div>
  );
};

export default About;
