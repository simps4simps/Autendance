import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Archive from "./components/Archive/Archive";
import PersonSearch from "./components/PersonSearch/PersonSearch";
import Assign from "./components/Assign/Assign";
import Settings from "./components/Settings/Settings";
import HamburgerNav from "./components/HamburgerNav/HamburgerNav";
import { MenuIcon } from "./components/IconsExport";
import { useEffect, useRef, useState } from "react";
import Login from "./components/Login/Login";
import { useCookies } from "react-cookie";

const App = () => {
  const menuRef = useRef<HTMLElement>({} as HTMLElement);
  const [cookies] = useCookies(["token"]);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const navigate = useNavigate();

  const requestData = async () => {
    const result = await fetch("http://localhost:5000/teacher-info", {
      credentials: "include",
      method: "GET",
    });

    // const json = await result.json();
    if (result.status == 200) {
      setIsAuthorized(true);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    requestData();
  }, [cookies]);

  const openMenu = () => {
    menuRef.current.classList.add("showMenu");
  };

  return (
    <div id="app">
      <div className="wrapper">
        {!isAuthorized ? (
          <Routes>
            <Route path="/login" Component={Login} />
          </Routes>
        ) : null}

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
          {isAuthorized ? (
            <Routes>
              <Route path="/" index Component={Dashboard} />
              <Route path="/archives" Component={Archive} />
              <Route path="/person-search" Component={PersonSearch} />
              <Route path="/assign" Component={Assign} />
              <Route path="/settings" Component={Settings} />
            </Routes>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
