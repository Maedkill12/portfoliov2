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
      containerStyle="h-full flex flex-col justify-center gap-20"
      customStyle=""
      name="Services"
    >
      <h2 className="text-center text-5xl font-bold">Services</h2>
      <div className="flex flex-row justify-around gap-4">
        <ServiceCard
          Icon={BsCodeSlash}
          title="Frontend"
          description="I create beautiful and responsive websites that adapt to any device and browser. I use the latest technologies and frameworks to ensure your website is fast, secure and user-friendly. Whether you need a landing page, a blog, an e-commerce site or a web app, I can deliver it with quality and style."
          list={frontendServices}
        />
        <ServiceCard
          Icon={BiServer}
          title="Backend"
          description=" I develop robust and scalable backend solutions that power your website or web app. I use the best practices and tools to ensure your data is secure, reliable and accessible. Whether you need a RESTful API, a database, a cloud service or a serverless function, I can deliver it with efficiency and performance."
          list={backendServices}
        />
        <ServiceCard
          Icon={AiOutlineMobile}
          title="Mobile development"
          description="I create stunning and functional mobile apps that run on iOS and Android devices. I use the most popular and cutting-edge technologies and frameworks to ensure your app is compatible, performant and engaging. Whether you need a native app, a hybrid app or a progressive web app, I can deliver it with flair and functionality."
          list={mobileServices}
        />
      </div>
    </Section>
  );
};

export default Services;
