import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useSnapshot } from "valtio";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import state from "../store";
import CustomButton from "../components/CustomButton";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      state.activeSection = "Home";
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="mt-[60px] h-[calc(100vh-60px)]"
      style={{
        backgroundColor: snap.palette.backgroundHeader,
        color: snap.palette.text,
      }}
    >
      <div className="w-[1280px] h-full mx-auto flex flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-3xl font-bold mb-2">Hello, It's Me</p>
          <h2 className="text-5xl font-bold mb-2">Alejandro Elias</h2>
          <p className="text-3xl font-bold mb-5">
            And I'm a{" "}
            <span style={{ color: snap.palette.primary }}>
              Fullstack Developer
            </span>
          </p>
          <p className="text-sm text-justify mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            rem accusantium, aliquid hic nam qui iusto quasi repellat
            repellendus incidunt perferendis impedit vitae laborum porro
            exercitationem doloremque quisquam. Ratione, quod.
          </p>
          <div className="flex flex-row gap-4 mb-5">
            {socialMedia.map((sm) => (
              <a key={sm.name} href={sm.url} target="blank">
                <sm.Icon size={32} color={snap.palette.primary} />
              </a>
            ))}
          </div>
          <CustomButton title="Download CV" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
          <div
            style={{ backgroundColor: snap.palette.primary }}
            className="w-[620px] h-[620px] rounded-full flex flex-col items-center justify-center overflow-hidden relative"
          >
            <img
              src="./photo.webp"
              alt="Alejandro Elias"
              className="absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
