import { useSnapshot } from "valtio";
import state from "../store";

const CustomInput = ({
  placeholder,
  type,
}: {
  placeholder: string;
  type: string;
}) => {
  const snap = useSnapshot(state);

  return (
    <input
      placeholder={placeholder}
      type={type}
      className="flex-1 p-3 rounded-xl border-none outline-none"
      style={{ backgroundColor: snap.palette.background }}
    />
  );
};

export default CustomInput;
