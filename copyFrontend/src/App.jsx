import React from "react";
import HomePage from "./Pages/HomePage";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import MixedDrinksList from "./Pages/MixedDrinksList";
import PieChartPage from "./Pages/PieChartPage";
import Logo from "./Pages/Logo";

function App() {
 
  return (
    <div >
    
    <Router>
      <Routes>
      <Route path="/"element={<Logo/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/mixed-drink-list" element={<MixedDrinksList/>}/>
        <Route path="/pie-chart" element={<PieChartPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;