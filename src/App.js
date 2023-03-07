import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Card from "./components/Card/Card";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services/>
      <Experience/>
      <Work/>
    </div>
  );
}

export default App;
