import React, { useState } from "react";
import DetailForm from "./DetailForm";
import LoginForm from "./LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const login = (username, password) => {
    setIsLoggedIn(true);
    console.log(username, password);
  };
  return (
    <>{isLoggedIn ? <DetailForm /> : <LoginForm loginHandler={login} />}</>
  );
}
export default App;
