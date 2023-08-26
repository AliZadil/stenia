import React from "react";
import {  Route, Routes } from "react-router-dom";
import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";

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
    <ChakraProvider>
      <CSSReset />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Homepage />} />
            <Route path="/board-advisory" element={<BoardAdvisory />} />
            <Route path="/people-agenda" element={<PeopleAgenda />} />
            <Route path="/team-for-execution" element={<TeamForExecution />} />
            <Route path="/business-improvement" element={<BusinessImprovement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mete-zadil" element={<MeteZadil />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
