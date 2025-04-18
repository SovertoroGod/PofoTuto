import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const footerLink = [
    {
      title: "Facebook",
      href: "#",
    },
    {
      title: "Twitter",
      href: "#",
    },
    {
      title: "Youtube",
      href: "#",
    },
    {
      title: "Instagram",
      href: "#",
    },
  ]
  return <footer className="relative  overflow-x-clip">
    <div className="absolute bg-emerald-300/30 h-[400px] w-[1600px] bottom-0 left-1/2
     -translate-x-1/2 [mask-image:radial-gradient(50%_80%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
    

      <div className="items-center flex flex-col gap-2 border-t border-white/10 md:flex md:flex-row md:justify-between md:items-center">
        <div className="text-white/30 text-sm my-8">&copy; 2025. All rights reserved</div>
        <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-2">
        {
          footerLink.map((link, index) => (
            <a href="" key={index} className="inline-flex items-center my-3 gap-2" >
              <span>{link.title}</span>
              <ArrowUpRightIcon className='size-4' />
            </a>
          ))
        }
        </nav>
       
      </div>
    </div>
  </footer>;
};
