


import React, { useState } from "react";
import { Modal, Box, Checkbox, FormControlLabel, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FilterModal = ({ open, handleClose, selectedDrink }) => {
  const checkboxes = [
    "Lime Juice",
    "Orange Juice",
    "Pineapple Juice",
    "Club Soda",
    "Cola",
    "Water",
    "Gin",
    "Rum",
    "Tequila",
  ];

  // State to track selected checkboxes
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();


  // Handle checkbox selection
  const handleCheckboxChange = (label) => {
    setSelectedOptions((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
    setShowAlert(false); // Hide alert if an option is selected
  };

  // Handle Apply button click
  const handleApply = () => {
    if (selectedOptions.length === 0) {
      setShowAlert(true);
    } else {
      navigate("/pie-chart", { state: { selectedOptions } });
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <h2 style={{ color: "black", textAlign: "center" }}>
            {selectedDrink?.title}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "10px",
            }}
          >
            {checkboxes.map((label, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    color="primary"
                    checked={selectedOptions.includes(label)}
                    onChange={() => handleCheckboxChange(label)}
                  />
                }
                label={label}
                sx={{ color: "black" }}
              />
            ))}
          </div>
          {showAlert && (
            <Alert severity="warning" style={{ marginTop: "10px" }}>
              Please select at least one option!
            </Alert>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleApply}
            style={{ marginTop: "20px" }}
          >
            Apply
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FilterModal;

