import { useSnapshot } from "valtio";
import { AiOutlineMobile } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import state from "../store";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/Section";

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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde quidem dolores ad tempore! Tempora corrupti quasi iste nam, in, exercitationem culpa placeat reprehenderit illum explicabo nisi accusamus, recusandae iure."
        />
        <ServiceCard
          Icon={BiServer}
          title="Backend"
          description="Lorem ipsum dolor sit amet."
        />
        <ServiceCard
          Icon={AiOutlineMobile}
          title="Mobile development"
          description="Lorem ipsum dolor sit amet."
        />
      </div>
    </Section>
  );
};

export default Services;
