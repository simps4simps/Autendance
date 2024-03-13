import "./HamburgerNav.css";
import { Link } from "react-router-dom";
import {
  InboxIcon,
  PersonSearchIcon,
  SettingsIcon,
  SpaceDashboardIcon,
  CloseIcon,
} from "../IconsExport";
import React from "react";

interface HamburgerNavProps {
  parent: React.MutableRefObject<HTMLElement>;
}

const HamburgerNav: React.FC<HamburgerNavProps> = ({ parent }) => {
  const toggleMenu = () => {
    parent.current.classList.remove("showMenu");
  };

  return (
    <div className="nav-wrapper-ham">
      <span id="exit-btn" onClick={toggleMenu}>
        <CloseIcon />
        <p>Close</p>
      </span>

      <Link to={"/"}>
        <div className="links-ham" title="Dashboard" onClick={toggleMenu}>
          <SpaceDashboardIcon />
          <p>Dashboard</p>
        </div>
      </Link>

      <Link to={"/archives"}>
        <div className="links-ham" title="Archives" onClick={toggleMenu}>
          <InboxIcon />
          <p>Archive</p>
        </div>
      </Link>

      <Link to={"/person-search"}>
        <div className="links-ham" title="Search" onClick={toggleMenu}>
          <PersonSearchIcon />
          <p>Search</p>
        </div>
      </Link>

      <Link to={"/settings"}>
        <div className="links-ham" title="Settings" onClick={toggleMenu}>
          <SettingsIcon />
          <p>Settings</p>
        </div>
      </Link>
    </div>
  );
};

export default HamburgerNav;
