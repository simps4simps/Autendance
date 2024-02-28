import "./Nav.css";
import {
  AssignmentIndIcon,
  InboxIcon,
  PersonSearchIcon,
  SettingsIcon,
  SpaceDashboardIcon,
} from "../IconsExport";

import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-wrapper">
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

        <Link to={"/assign"}>
          <div className="links" title="Assign">
            <AssignmentIndIcon />
            <p>Assign</p>
          </div>
        </Link>

        <Link to={"/settings"}>
          <div className="links" id="settings-link" title="Settings">
            <SettingsIcon />
          </div>
        </Link>

        <Outlet />
      </div>
    </>
  );
};

export default Nav;
