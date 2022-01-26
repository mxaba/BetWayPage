import axios from "axios";

export const userClient = axios.create({
  baseURL: "http://localhost:5000"
});
