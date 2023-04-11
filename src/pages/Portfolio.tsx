import Section from "../components/Section";
import { useSnapshot } from "valtio";
import state from "../store";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import sanityClient from "../config/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const Portfolio = () => {
  const [projects, setProjects] = useState<
    Array<{
      _id: string;
      name: string;
      description: string;
      url: string;
      image: SanityImageSource;
    }>
  >([]);
  const snap = useSnapshot(state);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await sanityClient.fetch(
        `*[_type == "project"] [0...6]`
      );
      setProjects(projects);
    };
    getProjects();
  }, []);

  return (
    <Section
      backgroundColor={snap.palette.background}
      containerStyle="h-full flex flex-col pt-[60px] lg:pt-0 justify-start lg:justify-center gap-4 md:gap-20"
      customStyle="h-full sm:h-[calc(100vh-60px)] pb-4 sm:pb-0"
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
        {projects?.map((project) => (
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
