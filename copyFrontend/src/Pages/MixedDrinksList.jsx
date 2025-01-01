// import React, { useState } from "react";
// import "../Css/mixedDrinks.css";
// import {
//   tequillaAndLime,
//   ginBased,
//   wishkeyBased,
//   vodkaBased,
//   mixedAlocohalBased,
// } from "../Data/cardData";
// import FilterModal from "../components/FilterModal";

// const MixedDrinksList = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedDrink, setSelectedDrink] = useState(null);

//   const handleOpen = (drink) => {
//     setSelectedDrink(drink); // Set the selected drink
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedDrink(null);
//   };

//   return (
//     <div className="main-container">
//       {/* DRINK LISTS */}
//       <h1 className="Heading-text">Gin Based</h1>
//       <div className="card-grid">
//         {ginBased.map((card) => (
//           <div className="card" key={card.id} onClick={() => handleOpen(card)}>
//             <img src={card.image} alt={card.title} />
//             <h3>{card.title}</h3>
//           </div>
//         ))}
//       </div>

//       <h1 className="Heading-text">Tequilla & Lime</h1>
//       <div className="card-grid">
//         {tequillaAndLime.map((card) => (
//           <div className="card" key={card.id} onClick={() => handleOpen(card)}>
//             <img src={card.image} alt={card.title} />
//             <h3>{card.title}</h3>
//           </div>
//         ))}
//       </div>

//       <h1 className="Heading-text">Wishkey Based</h1>
//       <div className="card-grid">
//         {wishkeyBased.map((card) => (
//           <div className="card" key={card.id} onClick={() => handleOpen(card)}>
//             <img src={card.image} alt={card.title} />
//             <h3>{card.title}</h3>
//           </div>
//         ))}
//       </div>

//       <h1 className="Heading-text">Vodka Based</h1>
//       <div className="card-grid">
//         {vodkaBased.map((card) => (
//           <div className="card" key={card.id} onClick={() => handleOpen(card)}>
//             <img src={card.image} alt={card.title} />
//             <h3>{card.title}</h3>
//           </div>
//         ))}
//       </div>

//       <h1 className="Heading-text">Mixed Alcohol Based</h1>
//       <div className="card-grid">
//         {mixedAlocohalBased.map((card) => (
//           <div className="card" key={card.id} onClick={() => handleOpen(card)}>
//             <img src={card.image} alt={card.title} />
//             <h3>{card.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* REUSABLE MODAL */}
//       <FilterModal
//         open={open}
//         handleClose={handleClose}
//         selectedDrink={selectedDrink}
//       />
//     </div>
//   );
// };

// export default MixedDrinksList;












// src/pages/MixedDrinksList.js

import React, { useState } from "react";
import "../Css/mixedDrinks.css";
import { tequillaAndLime, ginBased, wishkeyBased, vodkaBased, mixedAlocohalBased } from "../Data/cardData";
import FilterModal from "../components/FilterModal";
import { useDrinkContext } from "../Context/DrinkContext"; // Import the context

const MixedDrinksList = () => {
  const [open, setOpen] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const { setDrinkTitle, selectedDrinkTitle } = useDrinkContext(); // Use the context to set the selected drink title

  const handleOpen = (drink) => {
    setSelectedDrink(drink);
    setOpen(true);
    setDrinkTitle(drink.title); // Set the selected drink title in the context
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDrink(null);
  };
  return (
    <div className="main-container">
      {/* DRINK LISTS */}
      <h1 className="Heading-text">Gin Based</h1>
      <div className="card-grid">
        {ginBased.map((card) => (
          <div className="card" key={card.id} onClick={() => handleOpen(card)}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      <h1 className="Heading-text">Tequilla & Lime</h1>
      <div className="card-grid">
        {tequillaAndLime.map((card) => (
          <div className="card" key={card.id} onClick={() => handleOpen(card)}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      <h1 className="Heading-text">Wishkey Based</h1>
      <div className="card-grid">
        {wishkeyBased.map((card) => (
          <div className="card" key={card.id} onClick={() => handleOpen(card)}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      <h1 className="Heading-text">Vodka Based</h1>
      <div className="card-grid">
        {vodkaBased.map((card) => (
          <div className="card" key={card.id} onClick={() => handleOpen(card)}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      <h1 className="Heading-text">Mixed Alcohol Based</h1>
      <div className="card-grid">
        {mixedAlocohalBased.map((card) => (
          <div className="card" key={card.id} onClick={() => handleOpen(card)}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      {/* REUSABLE MODAL */}
      <FilterModal open={open} handleClose={handleClose} selectedDrink={selectedDrink} />
    </div>
  );
};

export default MixedDrinksList;
