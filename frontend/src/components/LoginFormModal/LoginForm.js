import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({credential:"demo-user", password:"password"})).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors)
      }
    )
  }

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label style={{ margin: "5px" }}>
          Username or Email:
          <span> </span>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label style={{ margin: "5px" }}>
          Password:
          <span> </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" style={{ alignSelf: "center", margin:"5px" }}>
          Login
        </button>
        <button onClick={(e) => handleDemo(e)} style={{ alignSelf: "center", margin:"5px" }}>
          Demo Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
