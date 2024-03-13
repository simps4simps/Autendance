import { MenuIcon } from "../IconsExport";
import HamburgerNav from "../HamburgerNav/HamburgerNav";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useRef } from "react";

const AppLayout = () => {
  const menuRef = useRef<HTMLElement>({} as HTMLElement);

  const openMenu = () => {
    menuRef.current.classList.add("showMenu");
  };

  return (
    <>
      <nav id="left-navigation">
        <Nav />
      </nav>

      <nav id="hamburger-nav" ref={menuRef}>
        <HamburgerNav parent={menuRef} />
      </nav>

      <div id="main-display">
        <div id="top-nav-mobile" onClick={openMenu}>
          <span>
            <MenuIcon />
          </span>

          <h2>Autendance</h2>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
