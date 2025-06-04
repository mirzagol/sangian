import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.sangiansofa.com/api",
});

export default apiClient;
