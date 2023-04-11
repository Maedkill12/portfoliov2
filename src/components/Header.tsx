import { useSnapshot } from "valtio";

import state from "../store";
import Container from "./Container";
import { menu } from "../config/constants";
import MobileNav from "./MobileNav";

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
      <Container customStyle="flex flex-row items-center py-4 relative">
        <div className="flex-1">
          <h1 className="font-bold text-xl">Portfolio.</h1>
        </div>
        <nav className="flex-row gap-4 hidden md:flex">
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
        </nav>
        <nav className="block md:hidden">
          <MobileNav />
        </nav>
      </Container>
    </div>
  );
};

export default Header;
