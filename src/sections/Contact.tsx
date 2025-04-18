import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return <div className="py-14 mt-20">
    <div className="container">
      <div className="relative bg-gradient-to-r from-emerald-500 to-sky-400 text-gray-800 rounded-xl px-6 py-6 text-center overflow-hidden z-0 md:text-left">
        <div className="absolute inset-0 -z-10" style={{
          backgroundImage : `url(${grainImage.src}))`
        }}></div>
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium ">Let's create something amazing together</h2>
            <p className="text-sm  font-medium md:text-base text-gray-700 mt-3">Ready to bring your next project to life? Let's connect and discuss how I can help your achieve your goals.</p>
          </div>
          <div>
            <button className="inline-flex items-center gap-3 bg-gray-900 text-white/80 px-4 py-2 rounded-lg w-max">
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
