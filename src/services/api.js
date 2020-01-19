import axios from "axios";

const api = axios.create({
  //My local host
  baseURL: "http://localhost:3333"
});
export default api;
