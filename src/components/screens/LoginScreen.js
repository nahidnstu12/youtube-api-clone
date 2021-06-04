/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./_loginScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { useHistory } from "react-router";
import { CLIENT_URL } from "../../utils/contsants";


export const LoginScreen = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (token) {
      history.push(`${CLIENT_URL}/`);
      console.log("login success")

    }
  }, [token]);

  const handleLogin = () => {
    dispatch(login());
  };
  return (
    <div className="login">
      <div className="login_Container">
        <img src="./ytlogo.png" alt="logo" />
        <button onClick={handleLogin} className="login_Btn">
          Login With Google
        </button>
        <p className="text">This Project is made using Youtube Api</p>
      </div>
    </div>
  );
};
