import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import CustomButton from "../components/CustomButton";

const About = () => {
  const snap = useSnapshot(state);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      state.activeSection = "About";
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="h-[calc(100vh-60px)]"
      style={{
        backgroundColor: snap.palette.background,
        color: snap.palette.text,
      }}
    >
      <div className="w-[1280px] h-full mx-auto flex flex-row items-center gap-8">
        <div className="">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            officia iste autem sed architecto quos numquam tenetur alias? Et
            aliquam laborum fugit eum nesciunt? Suscipit qui nesciunt iure animi
            itaque.
          </p>
          <CustomButton title="Read More" />
        </div>
      </div>
    </div>
  );
};

export default About;
