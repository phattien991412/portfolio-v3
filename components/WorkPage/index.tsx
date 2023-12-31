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

interface Image {
  title: string;
  path: string;
  link: string;
}

export interface ItemSlide {
  images: Image[];
}

const WorkPage = () => {
  const workSlides: ItemSlide[] = [
    {
      images: [
        {
          title: "Airbnb",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782854/project4_kyqeh3.png",
          link: "https://airbnb47.vercel.app/"
        },
        {
          title: "NFT Marketplace",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782852/project3_nocfq6.png",
          link: "https://nftmarketplace47.vercel.app/"
        },
        {
          title: "Meta Madness",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782852/project5_bdhzce.png",
          link: "https://metamadness47.vercel.app/"
        },
        {
          title: "Neflix",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782851/project1_ap5vjp.png",
          link: "https://themovie47.vercel.app/auth"
        }
      ]
    },
    {
      images: [
        {
          title: "Interno",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782851/project2_m9va0v.png",
          link: "https://interno-nine.vercel.app/"
        },
        {
          title: "Flexibble",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782852/project6_nsp0yp.png",
          link: "https://flexibble-47.vercel.app/"
        },
        {
          title: "Portfolio v1",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782852/project7_agmfjl.png",
          link: "https://tienphat-portfolio-v1.vercel.app/"
        },
        {
          title: "Social Guide",
          path: "https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782852/project8_z6ifqw.png",
          link: "https://socialguide47.netlify.app/"
        }
      ]
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
              className=" xl:mt-12"
            >
              My work <span className="text-accent">.</span>
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
            <Slide workSlides={workSlides} />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default WorkPage;
