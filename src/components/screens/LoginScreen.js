/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./_loginScreen.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
// import { useHistory } from "react-router";
import { useRouter } from "next/router";
import { CLIENT_URL } from "../../utils/contsants";


export const LoginScreen = () => {
  
  const dispatch = useDispatch();
  // const history = useHistory();
  const router = useRouter()
  const token = useSelector((state) => state.auth.accessToken);
  console.log(token);

  useEffect(() => {
    if (token) {
      // history.push(`${CLIENT_URL}/`);
      router.push(CLIENT_URL)
      console.log("login success")

    }
  }, [token]);

  const handleLogin = () => {
    dispatch(login());
  };
  return (
    <div className={styles.login}>
      <div className={styles.login_Container}>
        <img src="./ytlogo.png" alt="logo" />
        <button onClick={handleLogin} className={styles.login_Btn}>
          Login With Google
        </button>
        <p className={styles.text}>This Project is made using Youtube Api</p>
      </div>
    </div>
  );
};
