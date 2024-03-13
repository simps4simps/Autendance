import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Archive from "./components/Archive/Archive";
import PersonSearch from "./components/PersonSearch/PersonSearch";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import AppLayout from "./components/AppLayout/AppLayout";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { TeacherContext, ITeacherContext } from "./components/Context";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [token] = useCookies(["token"]);

  const [teacherContextValue, setTeacherContextValue] =
    useState<ITeacherContext>({} as ITeacherContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(token).length != 0) return;
    setIsAuthorized(false);
  }, [token]);

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
  }, [token, navigate, isAuthorized]);

  return (
    <div id="app">
      <div className="wrapper">
        <TeacherContext.Provider value={teacherContextValue}>
          <Routes>
            <Route path="*" element={<h1>No matching URL</h1>} />
            {isAuthorized ? (
              <Route element={<AppLayout />}>
                <Route path="/" index Component={Dashboard} />
                <Route path="/archives" Component={Archive} />
                <Route path="/person-search" Component={PersonSearch} />
                <Route path="/settings" Component={Settings} />
              </Route>
            ) : (
              <Route path="/login" Component={Login} />
            )}
          </Routes>
        </TeacherContext.Provider>
      </div>
    </div>
  );
};

export default App;
