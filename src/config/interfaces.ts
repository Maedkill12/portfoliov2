import { IconType } from "react-icons/lib";

interface Service {
  name: string;
  experience: string;
  Icon: IconType;
}

interface ServiceListProps {
  list: Service[];
}

export type { Service, ServiceListProps };
