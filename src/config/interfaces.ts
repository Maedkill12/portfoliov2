import { IconType } from "react-icons/lib";

interface Service {
  name: string;
  experience: string;
  Icon: IconType;
}

interface Menu {
  name: string;
  path: string;
}

export type { Service, Menu };
