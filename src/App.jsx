import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import Preloader from "./components/Preloader/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />

        <Home />
        <Experience />
        <Projects />
        <About />

        <Footer />
      </div>
    </>
  );
}

export default App;
