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
      <Link to={"/"}>
        <div className="links">
          <SpaceDashboardIcon />
          <p>Dashboard</p>
        </div>
      </Link>

      <Link to={"/archives"}>
        <div className="links">
          <InboxIcon />
          <p>Archive</p>
        </div>
      </Link>

      <Link to={"/person-search"}>
        <div className="links">
          <PersonSearchIcon />
          <p>Person search</p>
        </div>
      </Link>

      <Link to={"/assign"}>
        <div className="links">
          <AssignmentIndIcon />
          <p>Assign</p>
        </div>
      </Link>

      <Link to={"/settings"}>
        <div className="links" id="settings-link">
          <SettingsIcon />
        </div>
      </Link>

      <Outlet />
    </>
  );
};

export default Nav;
