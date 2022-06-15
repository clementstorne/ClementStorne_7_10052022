const axios = require("axios");

const Axios = axios.create({
  baseUrl: "http://localhost:3000",
});

export default Axios;
