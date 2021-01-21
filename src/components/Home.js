import React from "react";
import "../App.css";
import Header from "./Header";
import Nav from "./Nav";
// import Projects from "./components/Projects";
import About from "./About";
// import Prices from "./components/Prices";
import Contact from "./Contact";
import Projects from "./Projects";

function Home(props) {
  return (
    <div>
      <Header state={props.state} />
      <Nav />
      <Projects state={props.state} />
      <About state={props.state} />

      <Contact />
    </div>
  );
}

export default Home;
