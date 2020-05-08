import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import StanIcon from "./components/StanIcon";

function App() {
  return (
    <div className="App">
      <section className="icons">
        <StanIcon name="bird" />
        <StanIcon name="cat" />
        <StanIcon name="dog" />
        <StanIcon name="human" />
      </section>
    </div>
  );
}

export default App;
