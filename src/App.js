import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import './App.css'
import Solves from "./Components/Solves";
import Contact from './Components/Contact';
function App() {
  const changeIcon1 = () => {
    var icon = document.getElementById("icon");
    icon.classList.remove("fa-whatsapp");
    icon.classList.remove("fa");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-paper-plane");
  }
  const changeIcon2 = () => {
    var icon = document.getElementById("icon");
    icon.classList.remove("fa-solid");
    icon.classList.remove("fa-paper-plane");
    icon.classList.add("fa-whatsapp");
    icon.classList.add("fa");
  }

  return (

    <Router>
      <Navbar />
      <Home />
      <br />
      <About />
      <br />
      <Projects />
      <Solves />
      <Contact />
      <footer>
        <div className="upperArea">
          <div className="introSec">
            <h2>Kunal Rajput</h2>
            <h4>A Developer building the Websites and Web Applications that leads to the success of the overall product.</h4>
          </div>
          <div className="linkSec">
            <h2>Social</h2>
            <div id="footerIcons">
              <a className="menu__item2" href="https://github.com/Kunal-Rajp00t" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
              <a className="menu__item2" href="https://in.linkedin.com/in/kunal-rajput-616178275" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              <a className="menu__item2" href="https://www.instagram.com/__the_name_is_kunal__/?next=%2F#" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr />

        <div className="lowerArea">&copy; Copyright 2024. Designed and Coded by <a href="#Home">dev.kunal</a></div>
      </footer>
      <Routes>

        <Route path="/" element={<>
          <a href="http://wa.me/8604156831"><div className="whatsapp" onMouseOver={() => { changeIcon1(); }} onMouseLeave={() => { changeIcon2(); }}> <i className="fa fa-whatsapp" id="icon"></i></div></a>
        </>} />

      </Routes>

      {/* <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
      </Routes> */}
    </Router>
  );
}
export default App;
