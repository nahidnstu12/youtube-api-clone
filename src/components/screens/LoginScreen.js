import React from "react";
import "./_loginScreen.scss";

export const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login_Container">
        <img src="./ytlogo.png" alt="logo" />
        <button className="login_Btn">Login With Google</button>
        <p className="text">This Project is made using Youtube Api</p>
      </div>
    </div>
  );
};
