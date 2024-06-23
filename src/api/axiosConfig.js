import axios from "axios";

export default axios.create({
  baseURL: "https://af9c-113-211-208-73.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
