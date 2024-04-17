import { GLOBAL_CONFIG } from "@shared/lib/config/configuration";
import axios from "axios";

const baseURL = GLOBAL_CONFIG.GENERIC_API_URL;

const AxiosInstancePostman = axios.create({ baseURL });

export default AxiosInstancePostman;
