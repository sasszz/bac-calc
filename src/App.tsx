import React from "react";
import "./App.css";
import Home from "./components/Home";
import Home2 from "./components/Home2";

function App() {
  return (
    <div className="App container mx-auto h-screen">
      <p className="mt-10 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-5">
        BAC Calculator
      </p>
      <Home2 />
      <p className="bg-purple-300 p-5 block uppercase tracking-wide text-gray-700 text-xs font-bold fixed bottom-0 left-0 w-screen h-12]">
        Please note this is for edutainment purposes only and does not guarantee
        accuracy. Do not drink and drive!
      </p>
    </div>
  );
}

export default App;
