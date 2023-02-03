import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Crew from "./pages/Crew";

//Pages
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
