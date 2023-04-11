import { useSnapshot } from "valtio";
import state from "../store";
import CustomButton from "../components/CustomButton";
import Section from "../components/Section";
import Modal from "../components/Modal";
import { useState } from "react";
import Container from "../components/Container";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const snap = useSnapshot(state);

  return (
    <Section
      backgroundColor={snap.palette.background}
      containerStyle="h-full flex flex-row items-center gap-8"
      customStyle=""
      name="About"
    >
      <div>
        <div
          style={{ borderColor: snap.palette.primary }}
          className="w-[620px] h-[620px] rounded-full flex flex-col items-center justify-center overflow-hidden relative border-4"
        >
          <img
            src="./photo.webp"
            alt="Alejandro Elias"
            className="absolute bottom-0"
          />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold">
          About <span style={{ color: snap.palette.primary }}>Me</span>
        </h2>
        <h3 className="text-3xl font-bold mt-3">Fullstack Developer</h3>
        <p className="my-5">
          Hi, I am Alejandro and I am from Mexico. I am a full-stack web
          developer with a passion for creating visually appealing and
          user-friendly websites. With a strong background in both front-end and
          back-end development, I am able to bring my clients' vision to life
          from start to finish.
        </p>
        <CustomButton
          title="Read More"
          options={{ onClick: () => setIsOpen(true) }}
        />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Container customStyle="flex flex-col gap-4 w-[500px] text-justify">
            <p>
              Hi, I am Alejandro and I am from Mexico. I am a full-stack web
              developer with a passion for creating visually appealing and
              user-friendly websites. With a strong background in both front-end
              and back-end development, I am able to bring my clients' vision to
              life from start to finish.
            </p>
            <p>
              My technical skills include HTML, CSS, JavaScript, and various
              frameworks and tools such as React, Node.js, and MongoDB. When it
              comes to design, I am always pushing the boundaries and exploring
              new ways to make websites stand out and engage users.
            </p>
            <p>
              Whether it's through unique animations or creative layouts, my
              goal is to make a lasting impression and provide an unforgettable
              user experience.
            </p>
            <p>
              Let's work together to bring your web presence to the next level!
            </p>
          </Container>
        </Modal>
      </div>
    </Section>
  );
};

export default About;
