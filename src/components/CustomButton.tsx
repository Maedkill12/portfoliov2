import { useSnapshot } from "valtio";

import state from "../store";

const CustomButton = ({
  title,
  options,
}: {
  title: string;
  options: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  const snap = useSnapshot(state);
  return (
    <button
      style={{
        backgroundColor: snap.palette.primary,
        color: snap.palette.backgroundHeader,
      }}
      {...options}
      className="w-32 px-1 py-2 rounded-2xl font-bold"
    >
      {title}
    </button>
  );
};

export default CustomButton;
