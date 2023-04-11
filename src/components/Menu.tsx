import { useSnapshot } from "valtio";
import { menu } from "../config/constants";
import state from "../store";

const Menu = ({ close }: any) => {
  const snap = useSnapshot(state);
  return (
    <nav
      className="fixed top-0 left-0 bottom-0 w-full pt-[100px] translate-x-[-100%] will-change-transform"
      style={{ backgroundColor: snap.palette.primary }}
    >
      <ul className="flex flex-col gap-2 p-3">
        {menu.map((item) => (
          <li
            key={item.name}
            className="text-white block origin-left font-bold text-4xl p-2 will-change-transform scale-100 blur-0"
            onClick={() => close()}
          >
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
