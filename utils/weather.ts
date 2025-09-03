import ClearSky from "@/images/clear-sky.svg";
import Drizzle from "@/images/drizzle.svg";
import Fog from "@/images/fog.svg";
import FreezingRain from "@/images/freezing-rain.svg";
import PartlyCloudy from "@/images/partly-cloudy.svg";
import RainShowers from "@/images/rain-showers.svg";
import Rain from "@/images/rain.svg";
import SnowGrains from "@/images/snow-grains.svg";
import Snow from "@/images/snow.svg";
import Thunderstorm from "@/images/thunderstorm.svg";

const weatherConditions: { codes: number[]; icon: string }[] = [
  { codes: [0], icon: ClearSky },
  { codes: [1, 2, 3], icon: PartlyCloudy },
  { codes: [45, 48], icon: Fog },
  { codes: [51, 53, 55, 56, 57], icon: Drizzle },
  { codes: [61, 63, 65], icon: Rain },
  { codes: [66, 67], icon: FreezingRain },
  { codes: [71, 73, 75, 85, 86], icon: Snow },
  { codes: [77], icon: SnowGrains },
  { codes: [80, 81, 82], icon: RainShowers },
  { codes: [95, 96, 99], icon: Thunderstorm },
];

export const getIcon = (code: number): string => {
  const condition = weatherConditions.find((c) => c.codes.includes(code));
  return condition ? condition.icon : ClearSky;
};

export const getTemperature = (data: any) => {
  const times = data.hourly.time;
  const temps = data.hourly.temperature_2m;

  const now = new Date();
  const currentHour = now.toISOString().slice(0, 13);

  const index = times.findIndex((t: string) => t.startsWith(currentHour));

  const currentTemp = index !== -1 ? temps[index] : temps[0];
  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);

  return {
    current: Math.floor(currentTemp),
    lowest: Math.floor(minTemp),
    highest: Math.floor(maxTemp),
  };
};
