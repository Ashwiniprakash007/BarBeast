// src/Context/DrinkContext.js

import React, { createContext, useContext, useState } from "react";

// Create the context
const DrinkContext = createContext();

// Custom hook to use the context
export const useDrinkContext = () => {
  return useContext(DrinkContext);
};

// Provider component to wrap your app and provide context
export const DrinkProvider = ({ children }) => {
  const [selectedDrinkTitle, setSelectedDrinkTitle] = useState(null);

  const setDrinkTitle = (title) => {
    setSelectedDrinkTitle(title);
  };

  return (
    <DrinkContext.Provider value={{ selectedDrinkTitle, setDrinkTitle }}>
      {children}
    </DrinkContext.Provider>
  );
};
