import Image from "next/image";

const Circle = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75">
      <Image
        src="/images/circles.png"
        width={260}
        height={200}
        alt="circle"
        className="w-full h-full"
      />
    </div>
  );
};

export default Circle;
