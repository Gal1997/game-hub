import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3678c087bf7a49a79d9d8dcb578d20ed",
  },
});
