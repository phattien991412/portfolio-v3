import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782852/hero_dge9pj.png"
        width={737}
        height={678}
        alt="avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
