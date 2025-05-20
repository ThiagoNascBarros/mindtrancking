import React from "react";
import { Routes, Route } from "react-router-dom";
import Questionario from "./Pages/Questionario";
import Home from "./Pages/Home";
import MindIA from "./Pages/MindIA";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/questionarios" element={<Questionario />} />
      <Route path="/mind-ai" element={<MindIA />} />
    </Routes>
  );
}