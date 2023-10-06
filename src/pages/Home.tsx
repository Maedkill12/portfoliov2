import { useSnapshot } from "valtio";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import state from "../store";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

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
      <motion.div
        className="flex flex-col justify-center flex-1"
        {...slideAnimation("down")}
      >
        <p className="mb-2 text-3xl font-bold">Hello, It's Me</p>
        <h2 className="mb-2 text-5xl font-bold">Alejandro Elias</h2>
        <p className="mb-5 text-3xl font-bold">
          And I'm a{" "}
          <span style={{ color: snap.palette.primary }}>
            Fullstack Developer
          </span>
        </p>
        <p className="mb-5 text-base text-justify">
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
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="block w-32 px-1 py-2 font-bold rounded-2xl"
          style={{
            backgroundColor: snap.palette.primary,
            color: snap.palette.backgroundHeader,
          }}
          href="./resume.pdf"
          target="blank"
        >
          Dwonload CV
        </motion.a>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center flex-1 overflow-hidden"
        {...slideAnimation("up")}
      >
        <motion.div
          style={{ backgroundColor: snap.palette.primary }}
          className=" md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] rounded-full flex flex-col items-center justify-center overflow-hidden relative shadow-[rgba(255,142,5,1)] shadow-lg"
          animate={{
            translateY: [10, 0, 10],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <img
            src="./photo.webp"
            alt="Alejandro Elias"
            className="absolute bottom-0 object-contain"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Home;
