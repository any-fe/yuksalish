import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home    from "./pages/Home/home";
import Contact from "./pages/Contact/contact";
import Courses from "./pages/Courses/courses";
import About   from "./pages/About/about";
import './index.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/"        element={<Home />}    />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about"   element={<About />}   />
      </Routes>
    </div>
  );
};

export default App;