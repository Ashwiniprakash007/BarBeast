import React from "react";
import { Modal, Box, Slider, Button, Typography } from "@mui/material";

const EditDrinkModal = ({ open, percentages, setPercentages, options, onClose, onApply }) => {
  // Drink colors array
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

  // Handle slider value change
  const handleSliderChange = (index, newValue) => {
    const total = percentages.reduce((sum, value) => sum + value, 0);
    const remaining = total - percentages[index];

    const newPercentages = percentages.map((value, idx) => {
      if (idx === index) {
        return newValue;
      }
      return Math.round((value / remaining) * (100 - newValue));
    });

    setPercentages(newPercentages);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyles }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Edit Drink Percentages
        </Typography>
        {options.map((option, index) => (
          <div key={index} className="slider-container" style={{ marginBottom: "20px" }}>
            <Typography sx={{ color: colors[index % colors.length], fontWeight: "bold" }}>
              {option}
            </Typography>
            <Slider
              value={percentages[index]}
              onChange={(e, newValue) => handleSliderChange(index, newValue)}
              min={0}
              max={100}
              step={1}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}%`}
              sx={{
                color: colors[index % colors.length], // Set slider color
                '& .MuiSlider-thumb': {
                  backgroundColor: colors[index % colors.length], // Thumb color
                },
              }}
            />
          </div>
        ))}
        <Button onClick={onApply} variant="contained" color="primary">
          Apply
        </Button>
      </Box>
    </Modal>
  );
};

// Styles for the modal
const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: 24,
  width: "400px",
  textAlign: "center",
};

export default EditDrinkModal;
