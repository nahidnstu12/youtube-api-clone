import axios from "axios";

const request = axios.create({
    
  baseURL: process.env.REACT_APP_YTC_API_URL,

  params: {
    key: process.env.REACT_APP_YTC_API_KEY,
  },
});

export default request;
