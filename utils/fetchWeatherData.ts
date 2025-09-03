import { getWeather } from "@/service/weather-service";
import { getTemperature } from "./weather";
import { getIcon } from "./weather";

const fetchWeatherData = async (latitude: string, longitude: string) => {
  const data = await getWeather(latitude, longitude);

  const temps = getTemperature(data);
  const icon = getIcon(data.hourly.weather_code[0]);

  return {
    icon,
    currentTemp: `${temps.current}`,
    lowestTemp: `${temps.lowest}`,
    highestTemp: `${temps.highest}`,
  };
};

export default fetchWeatherData;
