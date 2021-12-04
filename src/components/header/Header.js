import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps, MdNotifications } from "react-icons/md";
import styles from "./header.module.scss";
import { useRouter } from "next/dist/client/router";

const Header = ({ handleToggle }) => {

  const { profile } = useSelector((state) => state?.auth ||{});
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${input}`);
    // setInput("")
  };

  return (
    <div className={styles.header}>
      <FaBars
        className={styles.header__menu}
        size={26}
        onClick={() => handleToggle()}
      />
      <img src="/ytlogo.png" alt="logo" className={styles.header__logo} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className={styles.header__icons}>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src={profile?.photoUrl}
          alt={"name"}
          className={styles.avatar}
          title={"profile?.name"}
        />
      </div>
    </div>
  );
};

export default Header;
