import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://192.168.0.42:3000"
    : "http://localhost:3000";

export const api = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
