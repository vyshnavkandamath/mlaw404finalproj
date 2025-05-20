 // src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header     from "./components/Header";
import Home       from "./pages/Home";
import OurWork    from "./pages/OurWork";
import Issues     from "./pages/Issues";
import TakeAction from "./pages/TakeAction";
import About      from "./pages/About";


export default function App() {
  return (
    <Router>
      <Header />
      {/* Add top padding equal to header height */}
      <div className="flex justify-center items-center min-h-[calc(100vh-5rem)] pt-20">
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/our-work"    element={<OurWork />} />
          <Route path="/issues"      element={<Issues />} />
          <Route path="/take-action" element={<TakeAction />} />
          <Route path="/about"       element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
