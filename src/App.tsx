import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaseText from "./components/text";
const App: React.FC = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BaseText>哈哈</BaseText>
      </header>
    </div>
  );
};


export default App;
