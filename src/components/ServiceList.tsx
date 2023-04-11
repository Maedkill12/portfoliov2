import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { Service } from "../config/interfaces";

interface ServiceListProps {
  list: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ list }) => {
  const snap = useSnapshot(state);
  return (
    <div className="flex flex-col items-center">
      {list.map((service) => (
        <div
          key={service.name}
          className="rounded-lg p-4 m-4 shadow-md w-80 flex flex-row gap-4 h-20"
          style={{ backgroundColor: snap.palette.backgroundHeader }}
        >
          <div className="h-full  flex flex-row items-center">
            <service.Icon size={36} color={snap.palette.primary} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-gray-400">{service.experience}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
