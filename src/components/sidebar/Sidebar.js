import React from "react";
import { useDispatch } from "react-redux";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHome,
  MdPlaylistPlay,
} from "react-icons/md";
import styles from "./sidebar.module.scss";
import { logout } from "../../redux/actions/authAction";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ sidebar, handleToggle }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    console.log("logout");

    dispatch(logout());
    router.push("/auth");
  };

  return (
    <nav
      className={`${sidebar} ? ${styles.sidebar} ${styles.open} : ${styles.sidebar}`}
      onClick={() => handleToggle()}
    >
      <div className="topBar">
        <Link href="/">
          <li>
            <MdHome size={23} />
            <span>Home</span>
          </li>
        </Link>
        <Link href="/feed/subscriptions">
          <li>
            <MdSubscriptions size={23} />
            <span>Subscription</span>
          </li>
        </Link>
        <Link href="/likedVideos">
          <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
          </li>
        </Link>
        <Link href="/myplaylists">
          <li>
            <MdPlaylistPlay size={23} />
            <span>My Playlists</span>
          </li>
        </Link>
      </div>
      
      <div>
        <hr className={styles.lastElement} />
        <li onClick={handleLogout}>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>
        <hr />
      </div>
    </nav>
  );
};

// const SidebarElement = () => {
//   return SidebarElementsList.map((item) => (
//     <Link href="/">
//       <li>
//         {item.icon}
//         <span>{item.sidebarName}</span>
//       </li>
//     </Link>
//   ));
// }
// const SidebarElementsList =[
//   {sidebarName:"Home", icon: <MdHome size={23} />},
//   {sidebarName:"Subscriptions", icon: <MdSubscriptions size={23} />},
//   {sidebarName:"Liked Videos", icon: <MdThumbUp size={23} />},
// ]

export default Sidebar;
