import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl h-screen container mx-auto md:px-20 px-4">
        <h1 className="text-2xl text-semibold text-center mt-10">
          Contact <span className="text-yellow-500">Us</span>
        </h1>
      </div>
      <Footer />
    </>
  );
}
