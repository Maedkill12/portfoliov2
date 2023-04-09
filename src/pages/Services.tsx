import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

const Services = () => {
  const snap = useSnapshot(state);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      state.activeSection = "Services";
    }
  }, [isInView]);
  return (
    <div
      className="h-[calc(100vh-60px)]"
      ref={ref}
      style={{
        backgroundColor: snap.palette.backgroundHeader,
        color: snap.palette.text,
      }}
    >
      Services
    </div>
  );
};

export default Services;
