import React from "react";

import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
