import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";  
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <div className="container">
    <SectionHeader title="REAL-WORLD RESULTS" subtitle="Featured Projects" description="See how I transformed concepts into engaging digital experiences" />
    
    
    
    <div className="mt-16 flex w-auto flex-col gap-16 mx-10 items-center lg:mx-0 lg:flex-row lg:gap-8 ">
      {portfolioProjects.map((project, index) => (
        <Card key={index} className="lg:h-[600px] px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-10"> 
          <div className="inline-flex items-center justify-normal gap-5 ">
            <h2 className="text-xl  bg-gradient-to-r from-emerald-500 to-sky-400 text-transparent tracking-wider font-medium text-center bg-clip-text">{project.company}</h2>
            <div className="size-2 bg-emerald-400 border-sky-400 rounded-full"></div>
            <span className="text-xl  bg-gradient-to-r from-emerald-500 to-sky-400 text-transparent tracking-wider font-medium text-center bg-clip-text">{project.year}</span>
          </div>
          <h3 className="text-4xl font-bold text-white my-4">{project.title}</h3>
          <hr className="border-gray-500 my-8"/>
          
          <ul className="flex flex-col  mt-10">
            {project.results.map((result, i) => (
              <li key={i} className="flex items-center gap-2 text-white/70 my-2">
                <CheckCircleIcon className="size-4" />
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
       
          
          <a href={project.link} >
            <button className="inline-flex w-full h-12 justify-center items-center gap-2 bg-white text-gray-800 rounded-xl px-4 py-2 mt-4">
              <span>Visit Live Site</span>
              <ArrowUpRightIcon className="size-4" />
     
            </button>
            
          </a>
          <div className="relative w-auto">
          <Image src={project.image.src} alt={project.title} width={500} height={300} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
          </div>
          
        </Card>
      ))}
      </div>
 
  </div>;
};
