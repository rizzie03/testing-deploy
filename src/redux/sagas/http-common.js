import axios from "axios";

export default axios.create({
  baseURL: "https://api-see-event-teamb.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
