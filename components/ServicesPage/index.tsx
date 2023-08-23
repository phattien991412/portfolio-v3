import { motion } from "framer-motion";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket
} from "react-icons/rx";

import Circle from "../AboutPage/Circle";
import Bulb from "./Bulb";
import Slide from "./Slide";
import { fadeIn } from "@/variants";

export interface ItemSlide {
  icon: any;
  title: string;
  description: string;
}

const ServicesPage = () => {
  const serviceData: ItemSlide[] = [
    {
      icon: <RxDesktop />,
      title: "Development",
      description: "Stay updated on web development advancements."
    },
    {
      icon: <RxRocket />,
      title: "SEO",
      description: "Boots search rankings with optimaztion techniques."
    },
    {
      icon: <RxCrop />,
      title: "Branding",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: <RxPencil2 />,
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];
  return (
    <div className="relative h-full bg-primary/30 py-36 flex items-center">
      <Circle />

      <div className="w-11/12 lg:w-3/5 mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              veniam corrupti voluptas nam eveniet porro error commodi quaerat
              rerum nostrum!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <Slide serviceData={serviceData} />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default ServicesPage;
