import React from "react";
import { Routes, Route } from "react-router-dom";
import Home    from "./pages/Home/home";
import Contact from "./pages/contact/contact";
import Courses from "./pages/courses/courses";
import About   from "./pages/About/about";
import './index.css';

const App = () => {
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