const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for submitted data
// let drinksData = [];

// POST route to handle submissions
app.post("/submit", (req, res) => {
  try {
    const {type ,title, selectedOptions, percentages } = req.body;

    // Log the posted data in the console
    console.log("Received Data:", { type , title,selectedOptions, percentages });

    // Validation
    if (!selectedOptions || !percentages || !title) {
      return res.status(400).json({ error: "selectedOptions and percentages are required" });
    }

    // Store data in memory
    const newData = {
      // id: drinksData.length + 1, // Simple ID generation
      type,
      title,
      selectedOptions,
      percentages,
      submittedAt: new Date(), // Timestamp for the submission
    };

    // drinksData.push(newData);

    res.status(201).json({ message: "Data saved successfully", data: newData });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET route to fetch all stored data
// app.get("/drinks", (req, res) => {
//   res.status(200).json({ data: drinksData });
// });

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





