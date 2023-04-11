import { useSnapshot } from "valtio";

import state from "../store";
import { motion } from "framer-motion";

const CustomButton = ({ title, options }: { title: string; options: any }) => {
  const snap = useSnapshot(state);

  return (
    <motion.button
      style={{
        backgroundColor: snap.palette.primary,
        color: snap.palette.backgroundHeader,
      }}
      {...options}
      whileHover={{ scale: 1.2 }}
      className="w-32 px-1 py-2 rounded-2xl font-bold"
    >
      {title}
    </motion.button>
  );
};

export default CustomButton;
