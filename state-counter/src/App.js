import React, {useState} from "react";
import "./App.css";

function App() {

  const [count, setcount] = useState(0);
  return(
    <div className="App">
      <header>
        <h1>Counter app using State/Hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={() => setcount(count+1)}>Increment</button>
      <button onClick={() => setcount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
