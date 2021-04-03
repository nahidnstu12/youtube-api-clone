import React from 'react';
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdHome,
  MdSentimentDissatisfied,
  MdLibraryBooks,
} from 'react-icons/md';

import './_sidebar.scss';

const Sidebar = ({ sidebar, handleToggle }) => {
  return (
    <nav
      className={sidebar ? 'sidebar open' : 'sidebar'}
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
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
