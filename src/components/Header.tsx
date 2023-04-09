import { useSnapshot } from "valtio";

import state from "../store";

const menu = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Contact", path: "#contact" },
];

const Header = () => {
  const snap = useSnapshot(state);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-10`}
      style={{
        backgroundColor: snap.palette.backgroundHeader,
        color: snap.palette.text,
      }}
    >
      <div className="w-[1280px] mx-auto flex flex-row items-center py-4">
        <div className="flex-1">
          <h1 className="font-bold text-xl">Portfolio.</h1>
        </div>
        <div className="flex flex-row gap-4">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.path}
              style={{
                color:
                  snap.activeSection === item.name ? snap.palette.primary : "",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
