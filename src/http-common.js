import axios from "axios";

export default axios.create({
  baseURL: "https://solomay-restraunts-nishantsirohi23.onrender.com/api/v1/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});