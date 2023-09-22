import axios from "axios";

// const SERVER_URL = "http://localhost:3001";
const SERVER_URL = "https://raw.githubusercontent.com/congchu/shinhan-front/main/src/data/db.json";
export const getStockGlobalEvents=()=>{
    return axios
    .get(`${SERVER_URL}`)
    .then((response) => response.data.globalStockEvents);
};