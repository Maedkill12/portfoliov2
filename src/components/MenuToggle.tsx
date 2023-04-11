import { useSnapshot } from "valtio";
import state from "../store";

const Path = (props: React.SVGProps<SVGPathElement>) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({
  toggle,
}: {
  toggle: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const snap = useSnapshot(state);

  return (
    <button
      onClick={toggle}
      className="outline-none border-none rounded-full p-2 absolute top-1 right-3 w-[50px] h-[50px] z-10 flex items-center justify-center"
      style={{ backgroundColor: snap.palette.primary }}
    >
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path d="M 2 2.5 L 20 2.5" className="top fill-white" />
        <Path
          d="M 2 9.423 L 20 9.423"
          opacity="1"
          className="middle fill-white"
        />
        <Path d="M 2 16.346 L 20 16.346" className="bottom fill-white" />
      </svg>
    </button>
  );
};
