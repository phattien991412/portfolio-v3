import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 group">
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat"
      >
        <Image
          src="https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782852/rounded-text_rngm9l.png"
          width={141}
          height={148}
          alt="project"
          className=" animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]  "
        />

        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectBtn;
