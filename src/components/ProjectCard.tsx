import { useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const ProjectCard = ({
  title,
  description,
  img,
  url,
}: {
  title: string;
  description: string;
  img: string;
  url: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`w-[300px] h-[300px] rounded-xl overflow-hidden relative`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={img}
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
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="flex-1">{description}</p>
        <a
          href={url}
          target="blank"
          className="w-10 h-10 bg-white rounded-full flex flex-row items-center justify-center"
        >
          <RiExternalLinkLine color="black" size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;