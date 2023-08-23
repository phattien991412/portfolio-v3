import { motion } from "framer-motion";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket
} from "react-icons/rx";

import Circle from "../AboutPage/Circle";

import { fadeIn } from "@/variants";
import Bulb from "../ServicesPage/Bulb";
import Slide from "./Slide";

export interface ItemSlide {
  image: string;
  name: string;
  position: string;
  message: string;
}

const Testimonials = () => {
  const testimonialData: ItemSlide[] = [
    {
      image: "/images/t-avt-1.png",
      name: "Anne Smith",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!"
    },
    {
      image: "/images/t-avt-2.png",
      name: "Jane Doe",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!"
    },
    {
      image: "/images/t-avt-3.png",
      name: "Jhon Doe",
      position: "Customer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!"
    }
  ];
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="w-11/12 lg:w-3/5 mx-auto flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" xl:mt-12"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=""
        >
          <Slide testimonialData={testimonialData} />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
