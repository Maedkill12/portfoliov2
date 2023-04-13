import { SanityImageSource } from "@sanity/image-url/lib/types/types";
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

interface Project {
  _id: string;
  name: string;
  description: string;
  url: string;
  image: SanityImageSource;
}

export type { Service, Menu, Project };
