import { useState } from "react";
import Button from "../button";

const LoginForm = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const loginUser = async () => {
    const loginData = new FormData();
    loginData.append("name", usernameInput);
    loginData.append("password", passwordInput);

    fetch("https://ec2-16-16-99-212.eu-north-1.compute.amazonaws.com/api/login", {
      method: "POST",
      body: loginData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 401) {
          alert("Login Failed. Check password and username.");
        }
      })
      .then((json) => {
        sessionStorage.setItem("api_key", json.api_key);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerUser = async () => {
    const registerData = new FormData();
    registerData.append("name", usernameInput);
    registerData.append("email", emailInput);
    registerData.append("password", passwordInput);

    fetch("https://ec2-16-16-99-212.eu-north-1.compute.amazonaws.com/api/register", {
      method: "POST",
      body: registerData,
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          alert("Registration Failed");
        }
      })
      .then((json) => {
        sessionStorage.setItem("api_key", json.api_key);
        window.location.href = "/";
      })
      .catch((error) => {
        alert("could not register.");
      });
  };

  let authMode = loginUser;

  if (props.authMode === "login") {
    authMode = loginUser;
  } else {
    authMode = registerUser;
  }

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

      {props.authMode === "register" ? (
        <>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={emailInput}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}
          />
        </>
        ) : (
          null
        )
      }

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

      <Button handleClick={authMode}>Submit</Button>
    </>
  );
};

export default LoginForm;
