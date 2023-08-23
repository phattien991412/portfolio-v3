import Image from "next/image";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowRight } from "react-icons/bs";

import { ItemSlide } from "./index";
import Link from "next/link";

interface Props {
  workSlides: ItemSlide[];
}

const Slide = ({ workSlides }: Props) => {

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[340px]"
    >
      {workSlides.map((item, i) =>
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {item.images.map((image, index) =>
              <div
                key={image.title + index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden">
                  {/* Image */}
                  <Image src={image.path} width={500} height={300} alt="work" />
                  {/* Overlay bg */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                    <Link legacyBehavior href={image.link}>
                      <a target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-x-2 text-sm tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>

                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>

                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300">
                            <BsArrowRight />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default Slide;
