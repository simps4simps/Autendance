import "./Nav.css";
import {
  InboxIcon,
  LogoutIcon,
  PersonSearchIcon,
  SettingsIcon,
  SpaceDashboardIcon,
} from "../IconsExport";

import { Link, useLocation } from "react-router-dom";
import { TeacherContext } from "../Context";
import { useCookies } from "react-cookie";
import { apiHostName } from "../Utils";

const Nav = () => {
  const location = useLocation().pathname.split("/")[1];
  const [, , removeCookie] = useCookies();

  const logout = () => {
    removeCookie("token", { path: "/", domain: apiHostName });
  };

  return (
    <>
      <div className="nav-wrapper">
        <div id="brand-name">
          <h2>Autendance</h2>
        </div>
        <Link to={"/"}>
          <div
            className={`links ${location == "" ? "high-light" : ""}`}
            title="Dashboard"
          >
            <SpaceDashboardIcon />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link to={"/archives"}>
          <div
            className={`links ${location == "archives" ? "high-light" : ""}`}
            title="Archives"
          >
            <InboxIcon />
            <p>Archive</p>
          </div>
        </Link>

        <Link to={"/person-search"}>
          <div
            className={`links ${
              location == "person-search" ? "high-light" : ""
            }`}
            title="Search"
          >
            <PersonSearchIcon />
            <p>Search</p>
          </div>
        </Link>

        <Link to={"/settings"}>
          <div
            className={`links ${location == "settings" ? "high-light" : ""}`}
            id="settings-link"
            title="Settings"
          >
            <SettingsIcon />
            <p>Settings</p>
          </div>
        </Link>

        <div id="account-brief">
          <div id="user">
            <TeacherContext.Consumer>
              {(value) => <p>{value.userName}</p>}
            </TeacherContext.Consumer>
          </div>

          <span onClick={logout}>
            <LogoutIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
