import axios from "axios";

export const ApiMenu = axios.create({
  baseURL: "https://api.brchallenges.com/",
});
