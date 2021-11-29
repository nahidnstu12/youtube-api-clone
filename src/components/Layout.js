import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { useState } from "react";

const Layout = ({ children }) => {
  const [sidebar, handleSidebar] = useState(false);
  const handleToggle = () => handleSidebar((val) => !val);

  return (
    <>
      <Header handleToggle={handleToggle} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
        <div className="app__main">{children}</div>
      </div>
    </>
  );
};
export default Layout;
