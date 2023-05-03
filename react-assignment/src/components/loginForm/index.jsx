import { useState } from "react";

const LoginForm = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  function RegisterEmailInput({ authMode }) {
    if (authMode === "register") {
      return (
        <>
          <label>Email</label>
          <input
            type="text"
            name="email"
            /*value={emailInput}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}*/
          />
        </>
      );
    }
  }

  const loginUser = async () => {
    const loginData = new FormData();
    loginData.append("name", usernameInput);
    loginData.append("password", passwordInput);

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: loginData,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 401) {
          console.log("Login failed");
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

    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: registerData,
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
      })
      .then((json) => {
        sessionStorage.setItem("api_key", json.api_key);
        setUsernameInput("");
        setEmailInput("");
        setPasswordInput("");
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

      <RegisterEmailInput authMode={props.authMode}></RegisterEmailInput>

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

      <button onClick={authMode}>Submit</button>
    </>
  );
};

export default LoginForm;
