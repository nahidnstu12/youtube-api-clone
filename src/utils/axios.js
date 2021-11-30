import axios from "axios";
import Cookies from "js-cookie";
import { YTC_ACESS_TOKEN } from "./contsants";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_YTC_API_URL,

  params: {
    key: process.env.NEXT_PUBLIC_APP_YTC_API_KEY,
  },
});

export const getData = async (url, ...params) => {
  const  data  = await request(url, {
    headers: {
      Authorization: Cookies.get(YTC_ACESS_TOKEN),
    },

    params: {...params[0],},
  });

  return data;
};
// const { data } = await getData("/videos", {
//   part: "snippet",
//   chart: "mostPopular",
//   regionCode: "BD",
//   maxResults: 12,
//   pageToken: getStatic().homeVideos.pageToken,
// });
export default request;
