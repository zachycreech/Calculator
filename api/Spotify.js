import Axios from "axios";

export default Axios.create({
  method: "GET",
  baseUrl: "https://spotify23.p.rapidapi.com",
});
