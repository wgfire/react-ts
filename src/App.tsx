import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaseText from "./StyleComponents/text";
import Inputs from './StyleComponents/input'
import Button from './StyleComponents/button'
const App: React.FC = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BaseText text="哈哈" ></BaseText>
        <Inputs />
        <Button text="哈哈哈"></Button>
      </header>
    </div>
  );
};


export default App;
