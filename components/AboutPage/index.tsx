import { useState } from "react";

import { motion } from "framer-motion";

import CountUp from "react-countup";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaSass
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiAntdesign,
  SiPostman,
  SiSwagger
} from "react-icons/si";

import Circle from "./Circle";
import Avatar from "../HomePage/Avatar";

import { fadeIn } from "@/variants";
import Tooltip from "../Tooltip";

const AboutPage = () => {
  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            {
              icon: <FaHtml5 />,
              label: "HTML5"
            },
            {
              icon: <FaCss3 />,
              label: "CSS3"
            },
            {
              icon: <FaJs />,
              label: "Javascript"
            },
            {
              icon: <SiTypescript />,
              label: "Typescript"
            },
            {
              icon: <FaReact />,
              label: "ReactJS"
            },
            {
              icon: <SiNextdotjs />,
              label: "NextJS"
            },
            {
              icon: <FaFigma />,
              label: "Figma"
            }
          ]
        },
        {
          title: "Web Development",
          icons: [
            {
              icon: <FaSass />,
              label: "SCSS"
            },
            {
              icon: <SiTailwindcss />,
              label: "TailwindCSS"
            },
            {
              icon: <SiChakraui />,
              label: "ChakraUI"
            },
            {
              icon: <SiAntdesign />,
              label: "Ant Design"
            },
            {
              icon: <SiFramer />,
              label: "Framer Motion"
            },
            {
              icon: <SiPostman />,
              label: "Postman"
            },
            {
              icon: <SiSwagger />,
              label: "Swagger"
            }
          ]
        }
      ]
    },
    {
      title: "experience",
      info: [
        {
          title: "Freelancer ",
          stage: " 07/2023 - present",
          icons: []
        },
        {
          title: "Frontend Web Developer - Stech Company",
          stage: "11/2022 - 07/2023",
          icons: []
        },
        {
          title: "Intern - Stech Company ",
          stage: "07/2022 - 11/2022",
          icons: []
        }
      ]
    }
  ];

  const [index, setIndex] = useState(0);
  return (
    <div className="relative h-full w-full bg-primary/30 py-24 md:py-16 xl:py-32 text-center xl:text-left">
      <Circle />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:block absolute bottom-0 -left-[200px] w-full h-full max-w-[400px] max-h-[500px]"
      >
        <Avatar />
      </motion.div>

      <div className="relative z-10 w-11/12 lg:w-3/5 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2>
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </h2>
          <p className="max-w-[700px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            explicabo ipsam facere reprehenderit esse in doloremque quis
            eligendi nemo molestiae.
          </p>
          {/* count */}
          <div className="hidden md:flex md:max-w-lg xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={8} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Years of experience
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={8} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Tech Stack
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={8} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Finished Projects
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) =>
              <div
                key={item.title}
                className={`${i === index &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(i)}
              >
                {" "}{item.title}
              </div>
            )}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, i) =>
              <div
                key={item.title + i}
                className="flex-1 flex flex-col md:flex-row md:gap-x-[1px] max-w-max items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0 ">
                  {item.title}
                </div>
                <div className="hidden md:flex">&nbsp;-&nbsp;</div>
                <div className="">
                  {/* @ts-ignore */}
                  {item.stage}
                </div>

                <div className="flex gap-x-4">
                  {item.icons.map((icon, i) =>
                    <div key={i} className="text-2xl text-white">
                      <Tooltip
                        label={icon.label}
                        className="xl:-top-7 -right-4"
                      >
                        {icon.icon}
                      </Tooltip>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
