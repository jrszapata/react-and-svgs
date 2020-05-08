import React from "react";
import "./App.css";
import StanIcon from "./components/StanIcon";

function App() {
  return (
    <div className="App">
      <section className="icons">
        <StanIcon name="logo" />
        <StanIcon name="bird" />
        <StanIcon name="cat" />
        <StanIcon name="dog" />
        <StanIcon name="human" />
      </section>
    </div>
  );
}

export default App;
