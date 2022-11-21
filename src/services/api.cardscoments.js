import axios from "axios";

export const ApiComent = axios.create({
  baseURL: "https://api.brchallenges.com/",
});
