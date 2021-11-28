import { YTC_ACESS_TOKEN, YTC_PROFILE } from "../../utils/contsants";
import Cookies from "js-cookie";

export default {
  auth: {
    accessToken: Cookies.get(YTC_ACESS_TOKEN) || null,
    profile:
      (typeof Cookies.get(YTC_PROFILE) !== "undefined" &&
        JSON.parse(Cookies.get(YTC_PROFILE))),
    // accessToken: null,
    // profile: null,
    loading: false,
  },
  homeVideos: {
    videos: [],
    pageToken: null,
    loading: false,
    activeCategory: "All",
  },
  channelDetails:{}
};
