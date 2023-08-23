import Image from "next/image";

const Circle = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75">
      <Image
        src="https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782850/circles_t5aajh.png"
        width={260}
        height={200}
        alt="circle"
        className="w-full h-full"
      />
    </div>
  );
};

export default Circle;
