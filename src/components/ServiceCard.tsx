import { IconType } from "react-icons/lib";
import { useSnapshot } from "valtio";
import { useState } from "react";

import state from "../store";
import CustomButton from "./CustomButton";
import { Service } from "../config/interfaces";
import Modal from "./Modal";
import ServiceList from "./ServiceList";

const ServiceCard = ({
  Icon,
  title,
  description,
  list,
}: {
  Icon: IconType;
  title: string;
  description: string;
  list: Service[];
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const snap = useSnapshot(state);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ServiceList list={list} />
      </Modal>
      <div
        className={`flex-1 h-[350px] px-2 py-4 border-2 rounded-xl transition-all ease-in-out duration-500 flex flex-col items-center gap-3 hover:scale-105`}
        style={{
          backgroundColor: snap.palette.background,
          borderColor: isHover ? snap.palette.primary : "transparent",
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Icon size={48} color={snap.palette.primary} />
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-center flex-1">{description}</p>
        <CustomButton
          title="Read More"
          options={{ onClick: () => setIsOpen(true) }}
        />
      </div>
    </>
  );
};

export default ServiceCard;
