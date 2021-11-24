import React from "react";
import { useDispatch } from "react-redux";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdHome,
  MdSentimentDissatisfied,
  MdLibraryBooks,
} from "react-icons/md";
import styles from "./sidebar.module.scss";
import { logout } from "../../redux/actions/authAction";

const Sidebar = ({ sidebar, handleToggle }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("logout");
    
    dispatch(logout());
  };

  return (
    <nav
      className={`${sidebar} ? ${styles.sidebar} ${styles.open} : ${styles.sidebar}`}
      onClick={() => handleToggle()}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>Who's Know</span>
      </li>
      <hr />
      <li onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
