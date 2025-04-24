import axios from "axios";

const apiClient = axios.create({
  baseURL: "37.152.178.151:8080/api",
});

export default apiClient;
