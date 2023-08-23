import Image from 'next/image';

const TopLeftImg = () => {
    return (
        <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]'>
            <Image src='https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782853/top-left-img_kk3dgk.png' width={400} height={400} alt='top left' />
        </div>
    );
};

export default TopLeftImg;