import Image from "next/image";
import React from "react";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-32 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src="/images/bulb.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="bulb"
      />
    </div>
  );
};

export default Bulb;
