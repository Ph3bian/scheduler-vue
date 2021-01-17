import axios from "axios";


let Axios = axios.create({
  baseURL: "https://tracktik-challenge.staffr.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export default Axios;
