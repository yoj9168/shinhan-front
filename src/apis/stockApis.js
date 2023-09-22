import axios from "axios";
import { useEffect, useState } from "react";

const SERVER_URL = "http://localhost:3001";

export const getStockGlobalEvents=()=>{
    return axios
    .get(`${SERVER_URL}/globalStockEvents`)
    .then((response) => response.data);
}