import React, { useState } from "react";
import "../Css/HomePage.css";
import glass_image from "../public/wine_glass.png";
import water_glass from "../public/water_glass.png";
import { TemporaryDrawer } from "../components/Drawer";
import { TopDrawer } from "../components/TopDrawer";
import { useDrinkContext } from "../Context/DrinkContext";

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [topDrawerOpen, setTopDrawerOpen] = useState(false);
  const {handleDrinkType} = useDrinkContext()


  const toggleDrawer = (newOpen) => {
    setDrawerOpen(newOpen);
  };

  const toggleTopDrawer = (newOpen) => {
    setTopDrawerOpen(newOpen);
  };

  const handleClickDrink = () => {
    toggleTopDrawer(true);
    handleDrinkType("mixedDrink")
  }

  return (
    <div>
      <div className="container">
        <div className="header">Please Select</div>

        <div className="icons">
          <div className="icon red" >
            <img
              className="glass_image"
              onClick={handleClickDrink}
              src={glass_image}
              alt="img.png"
            />
          </div>
          <div className="icon blue" >
            <img
              className="glass_image1"
              src={water_glass}
              alt="img.png"
            />
          </div>
        </div>

        <div className="footer">
          <div className="icon">🏠</div>
          <div className="icon">↩️</div>
          <div className="icon">📖</div>
          <div className="icon" onClick={() => toggleDrawer(true)}>⚙️</div>
        </div>
      </div>
      <TemporaryDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
      <TopDrawer open={topDrawerOpen} onClose={() => toggleTopDrawer(false)} />
    </div>
  );
};

export default HomePage;
