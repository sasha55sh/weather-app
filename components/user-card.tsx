"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { User } from "@/config/types";
import WeatherModal from "./weather-modal";
import { Card, Button } from "flowbite-react";
import fetchWeatherData from "@/utils/fetchWeatherData";

import SavedIcon from "@/images/saved-icon.svg";
import UnsavedIcon from "@/images/unsaved-icon.svg";

const UserCard: FC<User & { withSaveBtn: boolean }> = ({
  name,
  gender,
  picture,
  location,
  email,
  withSaveBtn,
}) => {
  const [openModal, setOpenModal] = useState(true);
  const [savedCard, setSavedCard] = useState(false);
  const [weatherData, setWeatherData] = useState<{
    icon: string;
    currentTemp: string;
    lowestTemp: string;
    highestTemp: string;
  } | null>(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedData") || "[]");
    setSavedCard(savedData.some((user: any) => user.email === email));
  });

  const handleFetchWeather = async () => {
    const weather = await fetchWeatherData(
      location.coordinates.latitude,
      location.coordinates.longitude
    );

    setWeatherData(weather);
    setOpenModal(true);
  };

  const handleSave = async () => {
    const savedData = JSON.parse(localStorage.getItem("savedData") || "[]");

    let weather = await fetchWeatherData(
      location.coordinates.latitude,
      location.coordinates.longitude
    );

    savedData.push({
      name,
      gender,
      picture,
      location,
      email,
      weather,
    });
    localStorage.setItem("savedData", JSON.stringify(savedData));
    setSavedCard(true);
  };

  return (
    <Card className="max-w-sm bg-slateBlue/10 relative">
      {withSaveBtn && (
        <button
          className="absolute top-3 right-3 w-12 h-12 rounded-full bg-offWhite flex items-center justify-center shadow-md hover:bg-redBrown/10 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:border-transparent"
          onClick={handleSave}
          disabled={savedCard}
        >
          <Image
            src={savedCard ? SavedIcon : UnsavedIcon}
            alt={savedCard ? "saved" : "unsaved"}
            width="25"
            height="25"
          />
        </button>
      )}
      <div className="flex flex-col items-center py-[30px] space-y-5">
        <Image
          alt={name.last}
          src={picture.large}
          width="120"
          height="120"
          className="rounded-full"
          unoptimized
        />
        <div className="flex flex-col items-center space-y-2.5 text-center">
          <div className="flex items-center space-x-1">
            <h5 className="text-xl font-semibold text-redBrown whitespace-nowrap">
              {name.first} {name.last}
            </h5>
            <span className="text-sm text-darkBlue/70">({gender})</span>
          </div>
          <p className="text-darkBlue/60 w-[250px] text-center">{email}</p>
          <span className="font-semibold text-darkBlue h-12">
            {location.city}, {location.country}
          </span>
        </div>
        <div>
          <Button
            className="border border-slateBlue text-slateBlue w-[150px] hover:bg-slateBlue/20 focus:ring-0"
            onClick={handleFetchWeather}
            size="lg"
          >
            Weather
          </Button>
          {weatherData && (
            <WeatherModal
              show={openModal}
              onClose={() => setOpenModal(false)}
              icon={weatherData.icon}
              currentTemp={weatherData.currentTemp}
              lowestTemp={weatherData.lowestTemp}
              highestTemp={weatherData.highestTemp}
            />
          )}
        </div>
      </div>
    </Card>
  );
};
export default UserCard;
