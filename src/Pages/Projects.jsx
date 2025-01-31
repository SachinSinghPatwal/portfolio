import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
function Projects() {
  const projects = [
    {
      name: "Blop",
      href: "https://bloggerfortest.vercel.app/",
      description:
        "Developed a full-stack blog app with user authentication, post management, and content visibility. Optimized data fetching, reducing API overhead by 22.18% and improving performance by 19%. Integrated real-time media preview and storage for enhanced content sharing. Strengthened security with route-based protection layers for controlled resource access.",
      techUsed: [
        " React ,",
        " Redux Toolkit, ",
        " Tailwind CSS,",
        " Appwrite,",
        " Real time Editor ",
      ],
      features: [
        "Real-time media preview,",
        " Responsive design,",
        " Optimized API calls,",
        " Security layers,",
      ],
    },
    {
      name: "Mention",
      href: "https://my-react-learnings-e94z.vercel.app/",
      description:
        "Developed a task management app  Utilized localStorage for persistent data, ensuring tasks are saved across sessions. Implemented React Router for smooth navigation and a responsive UI with Tailwind CSS. The app provides a seamless, user-friendly experience with task management features.",
      techUsed: ["React, ", " Redux Toolkit, ", " Tailwind CSS, ", " Appwrite"],
      features: [
        " add, update, remove, and delete tasks,",
        " toggle task completeness",
      ],
    },
    {
      name: "Currency Converter",
      href: "https://my-react-learnings.vercel.app/",
      description:
        "Developed a currency converter application that allows users to convert amounts between different currencies in real-time. The app fetches live exchange rates and provides an intuitive interface for users to input and convert currencies easily. It includes features like saving recent conversions and ensuring the UI is responsive across devices.",
      techUsed: [
        " React, ",
        " Redux, ",
        " Tailwind CSS, ",
        " API (Exchange Rates)",
      ],
      features: [
        " convert amounts between multiple currencies,",
        " fetch live exchange rates,",
        " save and display recent conversions,",
        " responsive UI for mobile and desktop",
      ],
    },
  ];
  return (
    <div className="h-fit">
      <div
        className={`bg-gradient-to-br from-[#6c34a0] to-[#8d1e9c]  z-0 
          relative px-[2rem] py-[10rem]`}
      >
        <div className="bg-transparent h-full py-[5rem] grid grid-flow-cols justify-items-center ">
          {projects.map((project) => (
            <div
              key={project.name}
              className=" bg-transparent sm:mx-[6rem] mx-[1rem] sm:mb-[10rem] mb-[3rem] rounded-[1rem] sm:p-[1rem] p-[.4rem] 

            border-[1px] border-black max-w-[40rem] "
            >
              <a
                href={project.href}
                className="text-[20px] underline text-blue-400 "
              >
                <FontAwesomeIcon
                  icon={faLink}
                  size="sm"
                  style={{ color: "#74C0FC", marginRight: ".2rem" }}
                />
                {project.name}
              </a>
              <div>
                <div className="px-[.5rem] mb-[.7rem] mt-[1rem]">
                  {project.description}
                </div>
                <div className="px-[.5rem] mb-[.7rem]">
                  <b>Tech</b> : {project.techUsed}
                </div>
                <div className="px-[.5rem] mb-[.7rem]">
                  <b>Features</b> : {project.features}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
