import { useSnapshot } from "valtio";

import state from "../store";

const CustomButton = ({ title }: { title: string }) => {
  const snap = useSnapshot(state);
  return (
    <button
      style={{
        backgroundColor: snap.palette.primary,
        color: snap.palette.backgroundHeader,
      }}
      className="w-32 px-1 py-2 rounded-2xl font-bold"
    >
      {title}
    </button>
  );
};

export default CustomButton;
