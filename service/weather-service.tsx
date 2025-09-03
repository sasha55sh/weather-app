import axios from "axios";

export const getWeather = async (latitude: string, longitude: string) => {
  const result = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weather_code`
  );
  return result.data;
};
