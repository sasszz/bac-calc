import React from "react";
import "./App.css";
import Home from "./components/Home";
import Home2 from "./components/Home2";

function App() {
  return (
    <div className="App container mx-auto">
      <p className="mt-10 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-5">
        BAC Calculator
      </p>
      <Home2 />
    </div>
  );
}

export default App;
