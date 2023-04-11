import { useSnapshot } from "valtio";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import state from "../store";
import Section from "../components/Section";

const socialMedia = [
  {
    Icon: AiOutlineGithub,
    url: "https://github.com/Maedkill12",
    name: "GitHub",
  },
  {
    Icon: AiOutlineLinkedin,
    url: "https://www.linkedin.com/in/alejandro-elias-3a9502168/",
    name: "Linkedin",
  },
];

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <Section
      backgroundColor={snap.palette.backgroundHeader}
      containerStyle="h-full flex flex-col pb-4 md:pb-0 md:flex-row"
      customStyle="mt-[60px] "
      name="Home"
    >
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-3xl font-bold mb-2">Hello, It's Me</p>
        <h2 className="text-5xl font-bold mb-2">Alejandro Elias</h2>
        <p className="text-3xl font-bold mb-5">
          And I'm a{" "}
          <span style={{ color: snap.palette.primary }}>
            Fullstack Developer
          </span>
        </p>
        <p className="text-base text-justify mb-5">
          I'm passionate about creating innovative and efficient solutions with
          web technologies. I have experience in developing web applications
          with React, TypeScript, Node.js, MongoDB and other tools. I like to
          learn new things and face new challenges.
        </p>
        <div className="flex flex-row gap-4 mb-5">
          {socialMedia.map((sm) => (
            <a key={sm.name} href={sm.url} target="blank">
              <sm.Icon size={32} color={snap.palette.primary} />
            </a>
          ))}
        </div>
        <a
          className="w-32 px-1 py-2 rounded-2xl font-bold block"
          style={{
            backgroundColor: snap.palette.primary,
            color: snap.palette.backgroundHeader,
          }}
          href="https://drive.google.com/file/d/1QEMckABOq0drhzcN_xLKHW66-BFq04YE/view?usp=share_link"
          target="blank"
        >
          Dwonload CV
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
        <div
          style={{ backgroundColor: snap.palette.primary }}
          className="w-[400px] h-[400px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] rounded-full flex flex-col items-center justify-center overflow-hidden relative"
        >
          <img
            src="./photo.webp"
            alt="Alejandro Elias"
            className="absolute bottom-0"
          />
        </div>
      </div>
    </Section>
  );
};

export default Home;
