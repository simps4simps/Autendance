import "./Nav.css";
import {
  InboxIcon,
  LogoutIcon,
  PersonSearchIcon,
  SettingsIcon,
  SpaceDashboardIcon,
} from "../IconsExport";

import { Link } from "react-router-dom";
import { TeacherContext } from "../Context";

const Nav = () => {
  return (
    <>
      <div className="nav-wrapper">
        <div id="brand-name">
          <h2>Autendance</h2>
        </div>
        <Link to={"/"}>
          <div className="links" title="Dashboard">
            <SpaceDashboardIcon />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link to={"/archives"}>
          <div className="links" title="Archives">
            <InboxIcon />
            <p>Archive</p>
          </div>
        </Link>

        <Link to={"/person-search"}>
          <div className="links" title="Search">
            <PersonSearchIcon />
            <p>Search</p>
          </div>
        </Link>

        <Link to={"/settings"}>
          <div className="links" id="settings-link" title="Settings">
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

          <LogoutIcon />
        </div>
      </div>
    </>
  );
};

export default Nav;
