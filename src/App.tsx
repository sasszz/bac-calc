import React from "react";
import "./App.css";
import FormEntryComponent from "./components/FormEntryComponent";
import Home from "./components/Home";
import HomeAttempt2 from "./components/HomeAttempt2";
import Time from "./components/Time";

function App() {
  return (
    <div className="App container mx-auto">
      <p className="mt-5 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-5">
        BAC Calculator
      </p>
      <HomeAttempt2 />
    </div>
  );
}

export default App;
