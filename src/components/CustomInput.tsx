import { useSnapshot } from "valtio";
import state from "../store";

const CustomInput = ({
  options,
}: {
  options: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  const snap = useSnapshot(state);

  return (
    <input
      {...options}
      className="max-w-full flex-1 p-3 rounded-xl border-none outline-none"
      style={{ backgroundColor: snap.palette.background }}
    />
  );
};

export default CustomInput;
