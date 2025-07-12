import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000";
axios.defaults.withCredentials = true;

export default axios;
