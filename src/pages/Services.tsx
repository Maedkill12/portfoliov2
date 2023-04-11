import { useSnapshot } from "valtio";
import {
  AiOutlineMobile,
  AiOutlineHtml5,
  AiOutlineAndroid,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import {
  DiCss3,
  DiJavascript,
  DiReact,
  DiPhp,
  DiNodejsSmall,
  DiMysql,
  DiMongodb,
} from "react-icons/di";
import { SiMui, SiTailwindcss, SiExpress, SiFirebase } from "react-icons/si";
import state from "../store";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/Section";
import { Service } from "../config/interfaces";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const frontendServices: Service[] = [
  { name: "HTML", experience: "5+ years of experience", Icon: AiOutlineHtml5 },
  { name: "CSS", experience: "5+ years of experience", Icon: DiCss3 },
  {
    name: "JavaScrip",
    experience: "5+ years of experience",
    Icon: DiJavascript,
  },
  { name: "ReactJs", experience: "3+ years of experience", Icon: DiReact },
  { name: "Material UI", experience: "2+ years of experience", Icon: SiMui },
  {
    name: "Tailwind CSS",
    experience: "2+ years of experience",
    Icon: SiTailwindcss,
  },
];

const backendServices: Service[] = [
  { name: "PHP", experience: "5+ years of experience", Icon: DiPhp },
  { name: "NodeJS", experience: "1+ years of experience", Icon: DiNodejsSmall },
  {
    name: "ExpressJS",
    experience: "1+ years of experience",
    Icon: SiExpress,
  },
  { name: "MySQL", experience: "5+ years of experience", Icon: DiMysql },
  { name: "MongoDB", experience: "1+ years of experience", Icon: DiMongodb },
  {
    name: "Firebase",
    experience: "2+ years of experience",
    Icon: SiFirebase,
  },
];

const mobileServices: Service[] = [
  {
    name: "Android Studio",
    experience: "2+ years of experience",
    Icon: AiOutlineAndroid,
  },
  { name: "React Native", experience: "2+ years of experience", Icon: DiReact },
];

const Services = () => {
  const snap = useSnapshot(state);

  return (
    <Section
      backgroundColor={snap.palette.backgroundHeader}
      containerStyle="h-full flex flex-col py-[20px] lg:py-0 justifiy-start lg:justify-center gap-4 lg:gap-20"
      customStyle=""
      name="Services"
    >
      <motion.h2
        {...slideAnimation("down")}
        className="text-center text-5xl font-bold"
      >
        Services
      </motion.h2>
      <motion.div
        {...slideAnimation("up")}
        className="flex flex-row flex-wrap lg:flex-wrap justify-around gap-4"
      >
        <ServiceCard
          Icon={BsCodeSlash}
          title="Frontend"
          description="I create beautiful and responsive websites that adapt to any device and browser. I use the latest technologies and frameworks to ensure your website is fast, secure and user-friendly."
          list={frontendServices}
          customStyle=""
        />
        <ServiceCard
          Icon={BiServer}
          title="Backend"
          description=" I develop robust and scalable backend solutions that power your website or web app. I use the best practices and tools to ensure your data is secure, reliable and accessible."
          list={backendServices}
          customStyle=""
        />
        <ServiceCard
          Icon={AiOutlineMobile}
          title="Mobile development"
          description="I create stunning and functional mobile apps that run on iOS and Android devices. I use the most popular and cutting-edge technologies and frameworks to ensure your app is compatible, performant and engaging."
          list={mobileServices}
          customStyle="basis-full lg:basis-0"
        />
      </motion.div>
    </Section>
  );
};

export default Services;
