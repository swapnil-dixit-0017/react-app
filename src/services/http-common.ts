import axios from "axios";

export default axios.create({
  baseURL: "https://api.tvmaze.com/search",
  headers: {
    "Content-type": "application/json"
  }
});
