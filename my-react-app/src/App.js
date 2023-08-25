// styles
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// Layouts
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

// Pages
import { Homepage } from "./Pages/Homepage";
import { BusinessImprovement } from "./Pages/BusinessImprovement";
import { TeamForExecution } from "./Pages/TeamForExecution";
import { PeopleAgenda } from "./Pages/PeopleAgenda";
import { BoardAdvisory } from "./Pages/BoardAdvisory";
import { Contact } from "./Pages/Contact";
import { MeteZadil } from "./Pages/MeteZadil";
import { Info } from "./Pages/Info";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
        <Route path="/board-advisory" element={<BoardAdvisory />} />
        <Route path="/people-agenda" element={<PeopleAgenda />} />
        <Route path="/tea-for-execution" element={<TeamForExecution />} />
        <Route path="/BusinessImprovement" element={<BusinessImprovement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mete-zadil" element={<MeteZadil />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

