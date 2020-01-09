import React from "react";
import "./App.css";
import Home from "./views/home/home";
function App() {
  return (
    <div className="App">
      <Home className="App-container" headerData="header数据" />
    </div>
  );
}

export default App;
