import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BsArrowRight } from "react-icons/bs";
import { ItemSlide } from "./index";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface Props {
  testimonialData: ItemSlide[];
}

const Slide = ({ testimonialData }: Props) => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((item, i) =>
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* info */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="testimonials"
                  />
                </div>
                {/* name */}
                <h3 className="text-lg">
                  {item.name}
                </h3>
                {/* position */}
                <p className="text-sm uppercase font-extralight tracking-widest">
                  {item.position}
                </p>
              </div>
            </div>
            {/* message */}
            <div className="bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              <div className="xl:text-lg text-center md:text-left">
                {item.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default Slide;
