import React, { useState, useEffect } from "react";
// import "../styles/App.css";
// import dp from "../ProfilePic.svg";
// import "../wave.js";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.loginHandler(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={submitHandler}>
        {/* <img className="dp" src={dp} alt="Logo"></img> */}
        <h2>Make Portfolio</h2>
        {/* <div className="input-div one focus">
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div> */}
        <div>
          {/* <h5>Username</h5> */}
          <input
            className="input"
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        {/* </div> */}

        {/* <div className="input-div two focus">
                    <div className="i">
                        <i className="fas fa-lock"></i>
                    </div> */}
        <div>
          {/* <h5>Password</h5> */}
          <input
            className="input"
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {/* </div> */}

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
