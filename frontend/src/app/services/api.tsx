import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8002",
});


export default api;