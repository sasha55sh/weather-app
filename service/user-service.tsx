import axios from "axios";

export const getUsers = async (count = 24) => {
  const result = await axios.get(`https://randomuser.me/api/?results=${count}`);
  return result.data.results;
};
