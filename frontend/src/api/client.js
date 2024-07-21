import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/api",
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response
      ? error.response.data.message
      : error.message;
    return Promise.reject(message);
  }
);

export default client;
