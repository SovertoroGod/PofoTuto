import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';

export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 pointer-events-none [mask-image:linear-gradient(to-bottom,transparent,black_10%,black70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage : `url(${grainImage.src})`
        }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
      </div>
      <div className="container z-10">
     
      <div className="flex items-center flex-col ">
        <Image src={memojiImage} className='size-[100px]' alt='person peaking the computer' />
        <div className='inline-flex items-center bg-gray-700 gap-4 px-4 py-1.5 border border-gray-600 rounded-lg'>
          <div className='bg-green-400 size-3 rounded-full'></div>
          <div className='text-sm font-medium'>Available for new project</div>
        </div>
      </div>
      <div>
          <h1 className='font-serif text-3xl text-center md:text-5xl mt-8 tracking-wide'>Building Exceptional User Experience</h1>
            <p className='mt-4 text-center font-semibold text-white/70 md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure accusantium ipsa mollitia, quidem atque saepe eum officiis hic beatae dolor. Quaerat voluptas facilis provident maxime cupiditate totam? Alias, repudiandae fugiat!</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center md:items-center mt-8 gap-4 items-center'>
        <button className='inline-flex items-center gap-4 bg-gray-800 border border-white/70 rounded-lg h-12 px-6 '>
          <span className='text-white/70 font-semibold'>Explore My Work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className='inline-flex items-center gap-4 border border-white/70 bg-white/40 h-12 px-6 rounded-lg hover:bg-gray-700 transition duration-300'>
          <span className='font-medium'>👋</span>
          <span className=' text-green-400 font-medium'>Let's connect</span>
        </button>
      </div>
    </div>
  </div>;
};
