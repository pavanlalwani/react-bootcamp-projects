import React from "react";
import "./styles.css";
import Button from "./Button"

const App = () => (
  <div>
    <h1 style={{ textAlign: "center" }}>Hello World!</h1>
    <button className="button">Hello World</button>
    <Button title="Play Store"></Button>
    <Button title="App Store"></Button>
  </div>
);

export default App;
