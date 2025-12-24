import axios from "axios";

import { API_BASEURL } from "@/lib/constants";

const instance = axios.create({
  baseURL: API_BASEURL,
  headers: {
    skip_zrok_interstitial: "true",
  },
});

export default instance;