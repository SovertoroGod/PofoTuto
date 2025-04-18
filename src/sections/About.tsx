import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMeemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  }
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '30%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '30%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '40%',
    top: '40%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '70%',
    top: '50%',
    
  },
  {
    title: 'Sleeping',
    emoji: '😴',
    left: '65%',
    top: '25%',
  },
  {
    title: 'Eating',
    emoji: '🍽️',
    left: '30%',
    top: '75%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '15%',
    top: '55%',
  },
]
export const AboutSection = () => {
  return <div className="mt-20">
    <div className="container">
      <SectionHeader title="About Me" subtitle="A Glimpse Into My World" description="Learn more about who I am, what I do and what inspires me." />
      <div className="flex flex-col mt-20 gap-8">
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-8">
          <Card className="h-[380px]">
            <CardHeader title="My Read" description="Explore the books shaping my perspectives." />
            <div className="w-40 mx-auto mt-2">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[380px] ">
              <CardHeader className="" title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experience." />
              <ToolBoxItems items={toolboxItems} className="" />
              <ToolBoxItems items={toolboxItems} itemWraperClassName="-translate-x-12"  className="mt-6"/>
          </Card>
        </div>
        <div className="grid gird-cols-1 md:grid md:grid-cols-2 gap-8">
        <Card className="h-[380px] p-0 flex flex-col ">
        <CardHeader title="Beyond the code" description="Explore my interests and hobbies beyond the digital realm." className="p-6" />
      <div className="relative flex-1">
        {hobbies.map((hobby, index) => (
          <div key={index} className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-500 rounded-full py-1.5" style={{
            top: hobby.top,
            left: hobby.left
          }}>
            <span className="font-medium text-gray-900">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </div>
        ))}
      </div>
    </Card>
    <Card className="h-[380px] p-0 relative">
          <Image src={mapImage} alt="Map" className="w-full h-full object-cover object-left-top" />
          <div className="size-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-300 to-sky-500 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <Image src={smileMeemoji} alt="Me Memoji" className="size-20" />
          </div>
        </Card>
        </div>
        
        </div>
      
      </div>
      
  </div>;
};
