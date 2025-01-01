import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";
import "../Css/PieChartPage.css"; // Import the updated CSS
import axios from "axios";
import { useDrinkContext } from "../Context/DrinkContext";
import EditDrinkModal from "../components/EditDrinkModal "


const PieChartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedOptions = location.state?.selectedOptions || [];
  const { selectedDrinkTitle , drinkType} = useDrinkContext();

  // Initial percentage values for each drink
  const initialPercentages = selectedOptions.map(() => 100 / selectedOptions.length);

  const [percentages, setPercentages] = useState(initialPercentages);
  const [openModal, setOpenModal] = useState(false);

  // Define the color scheme for the PieChart slices
  const colors = [
    "#00BFFF", // Vodka: Deep Sky Blue
    "#98FB98", // Gin: Pale Green
    "#FF7F50", // Rum: Coral
    "#ADFF2F", // Tequila: Green Yellow
    "#D2691E", // Whiskey: Chocolate
    "#32CD32", // Lime: Lime Green
    "#FFA500", // Orange Juice: Orange
    "#FFFF00", // Pineapple Juice: Yellow
    "#C0C0C0", // Club Soda: Silver
    "#3E2723", // Cola: Dark Brown
    "#F1C40F", // Simple Syrup: Golden Yellow
  ];

  // Prepare data for the pie chart using updated percentages
  const data = selectedOptions.map((option, index) => ({
    id: index,
    value: percentages[index], // Use updated percentages here
    label: option,
    color: colors[index % colors.length], // Cycle through colors
  }));



    const handleSubmit = async () => {
    const payload = {
      type: drinkType,
      title: selectedDrinkTitle, // Use the title from context
      selectedOptions: selectedOptions,
      percentages: percentages,
    };

    try {
       await axios.post("http://localhost:8000/submit",payload);
        alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting data.");
    }
  };

  return (
    <div className="pie-chart-page">
      <div className="sidebar">
        <button className="button" onClick={() => navigate(-1)}>Back</button>
        <div>
          <button onClick={() => setOpenModal(true)}>Edit Drinks</button>
          <button onClick={handleSubmit} className="submit-button">
            Submit Data
          </button>
        </div>
      </div>
      <div className="main-content">
        <PieChart
          series={[
            {
              data: data.map((item) => ({
                id: item.id,
                value: item.value,
                label: item.label,
                color: item.color,
              })),
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "white" },
              label: {
                formatter: (params) => params.label, // Display labels
                style: {
                  fill: "white", // Set label text color to white
                  fontSize: 14,
                  fontWeight: "bold",
                },
              },
            },
          ]}
          legend={{
            itemName: {
              style: {
                fill: "white", // Set legend text color to white
                fontSize: 14,
                fontWeight: "bold",
              },
            },
            itemValue: {
              style: {
                fill: "white", // Set legend value text color to white (if this is needed)
              },
            },
          }}
          height={300} // Adjust the height if needed
          sx={{
            fontWeight: "bold",
            color: "white", // This won't affect the internal chart elements
            fill: "white", // This won't affect the internal chart elements
          }}
        />

        <div className="glass-container">
          <div className="glass">
            {selectedOptions.map((option, index) => (
              <div
                key={index}
                className="juice"
                style={{
                  height: `${percentages[index]}%`, // Use updated percentages here
                  backgroundColor: colors[index % colors.length], // Match colors with PieChart
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Use the modal component */}
      <EditDrinkModal
        open={openModal}
        percentages={percentages}
        setPercentages={setPercentages}
        options={selectedOptions}
        onClose={() => setOpenModal(false)}
        onApply={() => setOpenModal(false)} // Apply changes
      />
    </div>
  );
};

export default PieChartPage;




















// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { PieChart } from "@mui/x-charts/PieChart";
// import "../Css/PieChartPage.css"; // Import the updated CSS
// import EditDrinkModal from "../components/EditDrinkModal ";
// import { useDrinkContext } from "../Context/DrinkContext"; // Import the context


// const PieChartPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedOptions = location.state?.selectedOptions || [];

//   //const { selectedDrinkTitle } = useDrinkContext(); // Access the selected drink title from the context


//   // Initial percentage values for each drink
//   const initialPercentages = selectedOptions.map(() => 100 / selectedOptions.length);

//   const [percentages, setPercentages] = useState(initialPercentages);
//   const [openModal, setOpenModal] = useState(false);

//   // Define the color scheme for the PieChart slices
//   const colors = [
//     "#00BFFF", // Vodka: Deep Sky Blue
//     "#98FB98", // Gin: Pale Green
//     "#FF7F50", // Rum: Coral
//     "#ADFF2F", // Tequila: Green Yellow
//     "#D2691E", // Whiskey: Chocolate
//     "#32CD32", // Lime: Lime Green
//     "#FFA500", // Orange Juice: Orange
//     "#FFFF00", // Pineapple Juice: Yellow
//     "#C0C0C0", // Club Soda: Silver
//     "#3E2723", // Cola: Dark Brown
//     "#F1C40F", // Simple Syrup: Golden Yellow
//   ];

//   // Prepare data for the pie chart using updated percentages
//   const data = selectedOptions.map((option, index) => ({
//     id: index,
//     value: percentages[index],
//     label: option,
//     color: colors[index % colors.length],
//   }));

//   // Function to handle submitting data to the backend
//   const handleSubmit = async () => {
//     const payload = {
//       //title: selectedDrinkTitle, // Use the title from context
//       selectedOptions: selectedOptions,
//       percentages: percentages,
//     };
// console.log("payload", payload)
//     try {
//       const response = await fetch("http://localhost:5000/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Ensure the server knows the content type
//         },
//         body: JSON.stringify(payload), // Convert the payload to a JSON string
//       });
//       const result = await response.json();
//         alert("Data submitted successfully!");
//         console.log(result); 
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("An error occurred while submitting data.");
//     }
//   };

//   return (
//     <div className="pie-chart-page">
//       <div className="sidebar">
//         <button className="button" onClick={() => navigate(-1)}>
//           Back
//         </button>
//         <div>
//           <button onClick={() => setOpenModal(true)}>Edit Drinks</button>
//         </div>
//         <div>
//           {/* Add the Submit Data button */}
//           <button onClick={handleSubmit} className="submit-button">
//             Submit Data
//           </button>
//         </div>
//       </div>
//       <div className="main-content">
//         <PieChart
//           series={[
//             {
//               data: data.map((item) => ({
//                 id: item.id,
//                 value: item.value,
//                 label: item.label,
//                 color: item.color,
//               })),
//               highlightScope: { fade: "global", highlight: "item" },
//               faded: { innerRadius: 30, additionalRadius: -30, color: "white" },
//               label: {
//                 formatter: (params) => params.label,
//                 style: {
//                   fill: "white",
//                   fontSize: 14,
//                   fontWeight: "bold",
//                 },
//               },
//             },
//           ]}
//           legend={{
//             itemName: {
//               style: {
//                 fill: "white",
//                 fontSize: 14,
//                 fontWeight: "bold",
//               },
//             },
//           }}
//           height={300}
//           sx={{
//             fontWeight: "bold",
//             color: "white",
//             fill: "white",
//           }}
//         />

//         <div className="glass-container">
//           <div className="glass">
//             {selectedOptions.map((option, index) => (
//               <div
//                 key={index}
//                 className="juice"
//                 style={{
//                   height: `${percentages[index]}%`,
//                   backgroundColor: colors[index % colors.length],
//                 }}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Use the modal component */}
//       <EditDrinkModal
//         open={openModal}
//         percentages={percentages}
//         setPercentages={setPercentages}
//         options={selectedOptions}
//         onClose={() => setOpenModal(false)}
//         onApply={() => setOpenModal(false)}
//       />
//     </div>
//   );
// };

// export default PieChartPage;





















