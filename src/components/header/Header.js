import React from "react";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
import styles from "./header.module.scss";

const Header = ({ handleToggle }) => {
    
  const { profile } = useSelector((state) => state.auth);
  const name = profile?.name;
  const photoUrl = profile?.photoUrl;
  console.log(photoUrl);
  return (
    <div className={styles.header}>
      <FaBars
        className={styles.header__menu}
        size={26}
        onClick={() => handleToggle()}
      />
      <img src="./ytlogo.png" alt="logo" className={styles.header__logo} />
      <form>
        <input type="text" placeholder="Search " />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className={styles.header__icons}>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={photoUrl} alt={name} className={styles.avatar} title={name} />
      </div>
    </div>
  );
};

export default Header;
