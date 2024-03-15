import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

interface UserObject {
  userName: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserObject>({} as UserObject);

  const changeUserState = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target == null) return;

    if (ev.target.name == "username-input") {
      setUser({
        userName: ev.target.value,
        password: user.password,
      });
    } else {
      setUser({
        userName: user.userName,
        password: ev.target.value,
      });
    }
  };

  const submitForm = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const result: Response = await fetch("http://localhost:5000/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        userName: user.userName,
        password: user.password,
      }),
    });

    if (result.status == 200) {
      navigate("/");
    }
  };

  return (
    <div id="login-page">
      <form action="POST">
        <h1>Login</h1>

        <div>
          <div className="parts">
            <label htmlFor="username-input" className="labels">
              Username
            </label>
            <input
              type="text"
              id="username-input"
              name="username-input"
              className="inputs"
              onChange={changeUserState}
            />
          </div>

          <div className="parts">
            <label htmlFor="password-input" className="labels">
              Password
            </label>
            <input
              type="password"
              id="password-input"
              name="password-input"
              className="inputs"
              onChange={changeUserState}
            />
          </div>

          <div className="parts">
            <button type="submit" id="submit-button" onClick={submitForm}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
