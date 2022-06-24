import React, {Component} from "react";
import Header from './components/header';
import api from "./services/api";
import "./styles.css";
import Main from "./pages/main";

function App() {
  return (
    <div className="App ">
      <Header />
      <Main />
    </div>
  );
}
export default App;
