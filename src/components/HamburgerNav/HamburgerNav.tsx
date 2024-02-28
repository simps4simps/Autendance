import "./HamburgerNav.css";
import { Link, Outlet } from "react-router-dom";
import {
  AssignmentIndIcon,
  InboxIcon,
  PersonSearchIcon,
  SettingsIcon,
  SpaceDashboardIcon,
} from "../IconsExport";

const HamburgerNav = () => {
  return (
    <div className="nav-wrapper-ham">
      <Link to={"/"}>
        <div className="links-ham" title="Dashboard">
          <SpaceDashboardIcon />
          <p>Dashboard</p>
        </div>
      </Link>

      <Link to={"/archives"}>
        <div className="links-ham" title="Archives">
          <InboxIcon />
          <p>Archive</p>
        </div>
      </Link>

      <Link to={"/person-search"}>
        <div className="links-ham" title="Search">
          <PersonSearchIcon />
          <p>Search</p>
        </div>
      </Link>

      <Link to={"/assign"}>
        <div className="links-ham" title="Assign">
          <AssignmentIndIcon />
          <p>Assign</p>
        </div>
      </Link>

      <Link to={"/settings"}>
        <div className="links-ham" title="Settings">
          <SettingsIcon />
          <p>Settings</p>
        </div>
      </Link>

      <Outlet />
    </div>
  );
};

export default HamburgerNav;
