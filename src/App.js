import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}
    >
      <Header />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
