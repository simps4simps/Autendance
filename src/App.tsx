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
import { apiURL } from "./components/Utils";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [token] = useCookies(["token"]);
  const navigate = useNavigate();
  const [teacherContextValue, setTeacherContextValue] =
    useState<ITeacherContext>({} as ITeacherContext);

  useEffect(() => {
    if (Object.keys(token).length != 0) return;
    https://drive.google.com/file/d/1ciJtQGR_GonGDGYQp3gGZ0SlVrFLRg7n/view?usp=drive_link
    setIsAuthorized(false);
  }, [token]);

  useEffect(() => {
    const fetchTeacherInfo = async () => {
      const result = await fetch(`${apiURL}/teacher-info`, {
        credentials: "include",
        method: "GET",
      });

      if (result.status != 200) {
        navigate("/login");
        return;
      }

      setIsAuthorized(true);
      const res = await result.json();
      setTeacherContextValue({
        firstName: res.firstName,
        lastName: res.lastName,
        userName: res.userName,
      });
    };

    fetchTeacherInfo();
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
