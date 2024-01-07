import axios from "axios";
const url = "http://127.0.0.1:8000/api/"
 const axiosClient = axios.create({
    baseURL: url,
})

export default axiosClient;
