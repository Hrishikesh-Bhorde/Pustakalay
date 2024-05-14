import React from "react";
import Navbar from "../Navbar";
import Course from "../Course";
import Footer from "../Footer";

export default function () {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}
