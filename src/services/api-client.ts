import axios from "axios";

const apiClient = axios.create({
  baseURL: " http://api.sangiansofa.com/api",
});

export default apiClient;
