import Section from "../components/Section";
import { useSnapshot } from "valtio";
import state from "../store";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
  const snap = useSnapshot(state);
  return (
    <Section
      backgroundColor={snap.palette.background}
      containerStyle="h-full flex flex-col justify-center gap-20"
      customStyle=""
      name="Portfolio"
    >
      <h2 className="text-center text-5xl font-bold">
        Latest <span style={{ color: snap.palette.primary }}>Project</span>
      </h2>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <ProjectCard
          title="Web"
          description="wffdfdfdfdfdfdf"
          img="./dedsafio.png"
          url=""
        />
        <ProjectCard
          title="Web"
          description="wffdfdfdfdfdfdf"
          img="./dedsafio.png"
          url=""
        />
        <ProjectCard
          title="Web"
          description="wffdfdfdfdfdfdf"
          img="./dedsafio.png"
          url=""
        />
        <ProjectCard
          title="Web"
          description="wffdfdfdfdfdfdf"
          img="./dedsafio.png"
          url=""
        />
        <ProjectCard
          title="Web"
          description="wffdfdfdfdfdfdf"
          img="./dedsafio.png"
          url=""
        />
      </div>
    </Section>
  );
};

export default Portfolio;
