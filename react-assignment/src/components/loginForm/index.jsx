import styles from "./loginForm.module.scss";
import Button from "../button";
import { useState } from "react";

const LoginForm = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const loginData = new FormData();
  loginData.append("name", usernameInput);
  loginData.append("password", passwordInput);

  const loginUser = async () => {
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: loginData,
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        if (response.status == 401) {
          console.log("Login failed");
        }
      })
      .then((json) => {
        sessionStorage.setItem("api_key", json.api_key);
        console.log("session startetd");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={usernameInput}
        onChange={(event) => {
          setUsernameInput(event.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="input-password"
        name="password"
        value={passwordInput}
        onChange={(event) => {
          setPasswordInput(event.target.value);
        }}
      />
      <button onClick={loginUser}>Submit</button>
    </>
  );
};

export default LoginForm;
