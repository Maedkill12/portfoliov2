import { useSnapshot } from "valtio";
import { useRef, useEffect } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import state from "../store";
import Container from "./Container";
import useMobile from "../hooks/useMobile";

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
  const isInViewOnce = useInView(ref, { amount: "all", once: true });
  const { isMobile } = useMobile();

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
      {isMobile && (
        <Container customStyle={containerStyle}>{children}</Container>
      )}
      {!isMobile && (
        <AnimatePresence>
          {isInViewOnce && (
            <Container customStyle={containerStyle}>{children}</Container>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Section;
