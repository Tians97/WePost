import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm({setShowLogin, setShowSignup}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const demoUser = (e) => {
    e.preventDefault()
    dispatch(sessionActions.login({ credential: "Tians", password: "password" }))
  }

  const handleClick = (e) => {
    e.preventDefault();
    setShowLogin(false);
    setShowSignup(true);
  }

  return (
    <div className="login-modal">
      <h1 className="login-title">Welcome Back.</h1>
      <form>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div className="login-content">
          <li>
            <label>
              Username or Email
              <br /><br />
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
          </li>
          <br />
          <li>
            <label>
              Password
              <br /><br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </li>
          <br /><br />
          <li>
            <div onClick={handleSubmit} className="signin-button" type="submit">Sign In</div>
          </li>
          <br /><br />
          <li>
            <div className="demouser" onClick={demoUser}>Demo User</div>
          </li>
          <br /><br />
          <li>
            <div className="change-form">
              No account? <span onClick={handleClick}>Create one</span>
            </div>
          </li>
        </div>
        
      </form>
      
    </div>
  );
}

export default LoginForm;