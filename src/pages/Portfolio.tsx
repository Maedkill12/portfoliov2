import Section from "../components/Section";
import { useSnapshot } from "valtio";
import state from "../store";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import sanityClient from "../config/sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
        `*[_type == "project"] [0...8]`
      );
      setProjects(projects);
    };
    getProjects();
  }, []);

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
        {projects?.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.name}
            description={project.description}
            img={project.image}
            url={project.url}
          />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
