import React from "react";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Example() {
  const notify = () => {
    // toast("Default Notification !");

    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      
    });

   
  };

  return (
    <>
      
      <button onClick={notify}>Notify</button>
    </>
  );
}
