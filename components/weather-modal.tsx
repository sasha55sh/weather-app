import React, { FC } from "react";
import Image from "next/image";
import { ModalProps } from "@/config/types";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";

const WeatherModal: FC<ModalProps> = ({
  show,
  onClose,
  icon,
  currentTemp,
  highestTemp,
  lowestTemp,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>Weather conditions</ModalHeader>
      <ModalBody>
        <div className="flex flex-col items-center space-y-5">
          <Image src={icon} alt="Weather condition" width="100" height="100" />

          <p className="text-4xl text-redBrown font-bold">
            {currentTemp}
            <span className="text-2.5xl font-medium text-redBrown/60"> ºC</span>
          </p>
          <div className="flex w-full justify-around">
            <p className="text-2xl text-slateBlue">
              <span className="text-darkBlue/70 text-1.5xl">Min: </span>{" "}
              {lowestTemp} ºC
            </p>
            <p className="text-2xl text-slateBlue">
              <span className="text-darkBlue/70 text-1.5xl">Max:</span>{" "}
              {highestTemp} ºC
            </p>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default WeatherModal;
