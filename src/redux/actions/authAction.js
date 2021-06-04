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

    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoUrl: res.additionalUserInfo.profile.picture,
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });

    // session storage
    sessionStorage.setItem(YTC_ACESS_TOKEN, accessToken);
    sessionStorage.setItem(YTC_PROFILE, JSON.stringify(profile));
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

  sessionStorage.removeItem(YTC_ACESS_TOKEN);
  sessionStorage.removeItem(YTC_PROFILE);
};
