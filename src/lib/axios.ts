import axios from "axios";

export const api = axios.create({
  baseURL: `https://bookwise-six.vercel.app/api`,
});
