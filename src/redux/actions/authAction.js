import firebase from "firebase/app";
import { YTC_ACESS_TOKEN, YTC_PROFILE } from "../../utils/contsants";
import auth from "../../utils/firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes";
import Cookies from "js-cookie";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const res = await auth.signInWithPopup(provider);
    console.log(res);

    const accessToken = res.credential.accessToken;
    // const refreshToken = res.user.refreshToken;
    const ch = await auth.currentUser.getIdToken(true)
    // console.log(ch)
    
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoUrl: res.additionalUserInfo.profile.picture,
      refreshToken: res.user.refreshToken,
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });

    Cookies.set(YTC_ACESS_TOKEN, JSON.stringify(accessToken), {
      path: "/",
      expires: 1,
      sameSite: true,
      //  secure: true,
    });
    Cookies.set(YTC_PROFILE, JSON.stringify(profile), {
      path: "/",
      expires: 1,
      sameSite: true,
      //  secure: true,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: LOG_OUT,
  });

  // sessionStorage.removeItem(YTC_ACESS_TOKEN);
  // sessionStorage.removeItem(YTC_PROFILE);
  Cookies.remove(YTC_ACESS_TOKEN);
  Cookies.remove(YTC_PROFILE);
};
