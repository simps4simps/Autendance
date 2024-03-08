import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Archive from "./components/Archive/Archive";
import PersonSearch from "./components/PersonSearch/PersonSearch";
import Settings from "./components/Settings/Settings";
import HamburgerNav from "./components/HamburgerNav/HamburgerNav";
import { MenuIcon } from "./components/IconsExport";
import { useEffect, useRef, useState } from "react";
import Login from "./components/Login/Login";
import { useCookies } from "react-cookie";
import { TeacherContext, ITeacherContext } from "./components/Context";

const App = () => {
  const [cookies] = useCookies(["token"]);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [teacherContextValue, setTeacherContextValue] =
    useState<ITeacherContext>({} as ITeacherContext);

  const menuRef = useRef<HTMLElement>({} as HTMLElement);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/teacher-info", {
      credentials: "include",
      method: "GET",
    }).then((result) => {
      if (result.status == 200) {
        setIsAuthorized(true);
        result.json().then((res) => {
          setTeacherContextValue({
            firstName: res.firstName,
            lastName: res.lastName,
            userName: res.userName,
          });
        });
      } else {
        navigate("/login");
      }
    });
  }, [cookies, navigate]);

  const openMenu = () => {
    menuRef.current.classList.add("showMenu");
  };

  return (
    <div id="app">
      <div className="wrapper">
        <TeacherContext.Provider value={teacherContextValue}>
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
                <Route path="/settings" Component={Settings} />
              </Routes>
            ) : null}
          </div>
        </TeacherContext.Provider>
      </div>
    </div>
  );
};

export default App;
