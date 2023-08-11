import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { urlFor } from "../config/sanity";

const ProjectCard = ({
  title,
  description,
  img,
  url,
}: {
  title: string;
  description: string;
  img: SanityImageSource;
  url: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`flex-auto w-full h-[190px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] rounded-xl overflow-hidden relative`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={urlFor(img).url()}
        alt="Project"
        className={`h-full w-full object-cover absolute transition-all ease-in-out duration-500 ${
          isHover && "scale-110"
        } `}
      />
      <div
        className={`h-full w-full absolute flex flex-col items-center py-4 project-card transition-all ease-out duration-500 ${
          isHover ? "top-0" : "top-full"
        }`}
      >
        <h3 className="text-lg font-bold sm:text-2xl">{title}</h3>
        <p className="flex-1 text-sm sm:text-base max-h-[calc(100%-70px)] text-center px-4 overflow-hidden">
          {description}
        </p>
        <a
          href={url}
          target="blank"
          className="flex flex-row items-center justify-center w-10 h-10 bg-white rounded-full"
        >
          <RiExternalLinkLine color="black" size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
