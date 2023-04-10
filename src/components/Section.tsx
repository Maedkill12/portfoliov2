import { useSnapshot } from "valtio";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import state from "../store";
import Container from "./Container";

const Section = ({
  name,
  customStyle = "",
  containerStyle = "",
  backgroundColor = "",
  children,
}: {
  name: string;
  customStyle: string;
  containerStyle: string;
  backgroundColor: string;
  children: React.ReactNode;
}) => {
  const snap = useSnapshot(state);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      state.activeSection = name;
    }
  }, [isInView, name]);
  return (
    <div
      ref={ref}
      className={`h-[calc(100vh-60px)] ${customStyle}`}
      style={{
        backgroundColor: backgroundColor,
        color: snap.palette.text,
      }}
    >
      <Container customStyle={containerStyle}>{children}</Container>
    </div>
  );
};

export default Section;
