import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Blob from "../Components/Blob";
import { useMediaQuery } from "react-responsive";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const arr = [
    ["React", "Redux Toolkit", "Framer Motion", "Github"],
    ["Html", "Css", "Tailwind", "JavaScript", "React Router"],
    ["PHP", "Python", "Mysql", "Rest API", "Appwrite", "Git"],
  ];
  const phoneScreen = useMediaQuery({ query: "(max-width:500px)" });
  return (
    <div className="bg-gradient-to-br from-[#d54e89] to-[#dd711e] overflow-x-hidden  min-h-[200vh]">
      <div
        className={`z-0 relative  sm:pt-[8rem]
          h-[75.4vh] px-[2rem] ${
            !phoneScreen
              ? "grid grid-cols-[45%_55%] content-center justify-center gap-[1rem] "
              : "pt-[30%]"
          }
      `}
      >
        <Blob key={location.key} />
        <h1
          className={`sm:text-[1.2rem] text-[.8rem] ${
            phoneScreen &&
            "relative z-[10] h-[300px] pt-[4rem] text-[14px] grid place-items-center"
          }`}
        >
          <div
            className={`sm:mt-[10%] mt-[21%] sm:max-w-[600px]
            ${phoneScreen ? "absolute bottom-15" : ""}
            `}
          >
            <span>
              I am <b>Sachin Singh Patwal</b> .
            </span>{" "}
            <br />
            <span>
              Web developer and designer who creates seamless, visually
              appealing websites. I combine technical expertise and design to
              provide tailored, user-friendly experiences. My goal is to deliver
              high-quality solutions that meet clients' needs and drive business
              success.
            </span>
          </div>
          <div
            className="absolute sm:bottom-[-2rem] bottom-[-1rem]"
            onClick={() => {
              navigate("../Project");
            }}
          >
            <Button />
          </div>
        </h1>
      </div>
      <div className="absolute sm:top-[48rem] top-[40.4rem] z-10 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          data-name="Layer 1"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D75978" />
              <stop offset="100%" stopColor="#DB694B" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#gradient)"
          />
        </svg>
      </div>
      <div className="w-full  relative mt-[12rem] pt-[20rem] pb-[15.5rem] sm:px-[4rem] px-[1rem] bg-gradient-to-br from-[#EC4796] to-[#6D33A2]">
        <div className="">
          <h1 className="text-7xl mb-[3rem] ">Skills</h1>
          <ul className="grid grid-flow-row gap-[.8rem]  text-xl ">
            {arr.map((nav) => (
              <div
                key={nav}
                className="bg-transparent grid grid-flow-col sm:gap-[1.5rem] w-fit
              justify-center gap-[.5rem] h-fit
              justify-items-center"
              >
                {nav.map((item) => (
                  <div
                    key={item}
                    className="bg-transparent sm:text-[16px] text-[12px] w-fit 
                sm:p-[.5rem] p-[.1rem] rounded-[5px] sm:gap-[1rem] 
                border-[1px] border-black h-fit"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
