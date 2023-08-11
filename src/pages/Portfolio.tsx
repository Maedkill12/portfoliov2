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
      containerStyle="w-full"
      customStyle="h-full sm:h-[calc(100vh-60px)] overflow-y-auto pb-4 sm:pb-0"
      name="Portfolio"
    >
      <motion.h2
        {...slideAnimation("down")}
        className="mb-10 text-5xl font-bold text-center"
      >
        Latest <span style={{ color: snap.palette.primary }}>Project</span>
      </motion.h2>
      <motion.div
        {...slideAnimation("up")}
        className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3"
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
