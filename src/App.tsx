import React from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App container mx-auto">
      <p className="mt-5 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-5">
        BAC Calculator
      </p>
      <Home />
    </div>
  );
}

export default App;
