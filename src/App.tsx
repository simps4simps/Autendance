import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Archive from "./components/Archive/Archive";
import PersonSearch from "./components/PersonSearch/PersonSearch";
import Assign from "./components/Assign/Assign";
import Settings from "./components/Settings/Settings";
// import HamburgerNav from "./components/HamburgerNav/HamburgerNav";
import { MenuIcon } from "./components/IconsExport";
const App = () => {
  return (
    <div id="app">
      <div className="wrapper">
        <BrowserRouter>
          <nav id="left-navigation">
            <Nav />
          </nav>

          {/* <nav id="hamburger-nav">
            <HamburgerNav />
          </nav> */}

          <div id="main-display">
            <div className="hamburger-menu-icon">
              <MenuIcon />
            </div>
            <Routes>
              <Route path="/" index Component={Dashboard} />
              <Route path="/archives" index Component={Archive} />
              <Route path="/person-search" index Component={PersonSearch} />
              <Route path="/assign" index Component={Assign} />
              <Route path="/settings" index Component={Settings} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
