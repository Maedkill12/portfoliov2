import Section from "../components/Section";
import { useSnapshot } from "valtio";
import state from "../store";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const Portfolio = () => {
  const snap = useSnapshot(state);

  return (
    <Section
      backgroundColor={snap.palette.background}
      containerStyle="h-full flex flex-col pt-[60px] lg:pt-0 justify-start lg:justify-center gap-4 md:gap-20"
      customStyle="h-full sm:h-[calc(100vh-60px)] overflow-y-auto pb-4 sm:pb-0"
      name="Portfolio"
    >
      <motion.h2
        {...slideAnimation("down")}
        className="text-center text-5xl font-bold"
      >
        Latest <span style={{ color: snap.palette.primary }}>Project</span>
      </motion.h2>
      <motion.div
        {...slideAnimation("up")}
        className="flex flex-row flex-wrap md:justify-between gap-4"
      >
        {snap.projects?.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.name}
            description={project.description}
            img={project.image}
            url={project.url}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Portfolio;
