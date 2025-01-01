// const express = require("express");
// const app = express();
// const PORT = 5000;

// // Middleware to parse JSON
// app.use(express.json());
// app.use(require("cors")());

// // Import GPIO library (pigpio)
// const Gpio = require("pigpio").Gpio;
// console.log("GPIO functionality is enabled.");

// // Initialize GPIO pins for motor control
// const motorStart = new Gpio(20, { mode: Gpio.OUTPUT }); // GPIO 20 for starting the motor
// const motorStop = new Gpio(21, { mode: Gpio.OUTPUT }); // GPIO 21 for stopping the motor

// // API route to start the motor
// app.post("/motor/start", (req, res) => {
//   try {
//     motorStart.digitalWrite(1); // Turn on the motor
//     motorStop.digitalWrite(0); // Ensure stop pin is off
//     res.status(200).json({ message: "Motor started" });
//   } catch (error) {
//     console.error("Error starting the motor:", error);
//     res.status(500).json({ message: "Failed to start motor", error });
//   }
// });

// // API route to stop the motor
// app.post("/motor/stop", (req, res) => {
//   try {
//     motorStart.digitalWrite(0); // Ensure start pin is off
//     motorStop.digitalWrite(1); // Turn off the motor
//     res.status(200).json({ message: "Motor stopped" });
//   } catch (error) {
//     console.error("Error stopping the motor:", error);
//     res.status(500).json({ message: "Failed to stop motor", error });
//   }
// });

// // Graceful shutdown to clean up GPIO
// process.on("SIGINT", () => {
//   console.log("\nShutting down...");
//   motorStart.digitalWrite(0); // Ensure motor is off
//   motorStop.digitalWrite(0);
//   process.exit();
// });

// // Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // )}

// app.listen(PORT, ()=> {
//     console.log(`Server is running on http://localhost:${PORT}`);
// })





// const express = require("express");
// const bodyParser = require("body-parser");
// const Gpio = require("onoff").Gpio;

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(require("cors")());

// // Configure GPIO Pins
// const motorStart = new Gpio(17, "out"); // GPIO17 for start
// const motorStop = new Gpio(27, "out"); // GPIO27 for stop

// // Endpoint to start motor
// app.post("/motor/start", (req, res) => {
//   motorStart.writeSync(1); // Turn ON motor
//   motorStop.writeSync(0); // Ensure stop pin is OFF
//   res.json({ status: "Motor Started" });
// });

// // Endpoint to stop motor
// app.post("/motor/stop", (req, res) => {
//   motorStart.writeSync(0); // Turn OFF motor
//   motorStop.writeSync(1); // Ensure stop pin is ON
//   res.json({ status: "Motor Stopped" });
// });

// // Clean up GPIO on exit
// process.on("SIGINT", () => {
//   motorStart.unexport();
//   motorStop.unexport();
//   process.exit();
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });





const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Conditional import for GPIO
// Conditional import for GPIO
let Gpio;
if (process.platform !== "linux") {
  console.warn("GPIO functionality is unavailable on non-Linux systems. Using mock GPIO.");
  Gpio = class {
    writeSync(value) {
      console.log(`Mock GPIO: writeSync(${value})`);
    }
    unexport() {
      console.log("Mock GPIO: unexport()");
    }
  };
} else {
  Gpio = require("onoff").Gpio;
  console.log("GPIO functionality is enabled.");
}


// Initialize GPIO pins for motor control
const motorStart = new Gpio(17, "out"); // GPIO 17 for starting the motor
const motorStop = new Gpio(27, "out"); // GPIO 27 for stopping the motor

// API route to start the motor
app.post("/motor/start", (req, res) => {
  try {
    motorStart.writeSync(1); // Turn on the motor
    motorStop.writeSync(0); // Ensure stop pin is off
    res.status(200).json({ message: "Motor started" });
  } catch (error) {
    console.error("Error starting the motor:", error);
    res.status(500).json({ message: "Failed to start motor", error });
  }
});

// API route to stop the motor
app.post("/motor/stop", (req, res) => {
  try {
    motorStart.writeSync(0); // Ensure start pin is off
    motorStop.writeSync(1); // Turn off the motor
    res.status(200).json({ message: "Motor stopped" });
  } catch (error) {
    console.error("Error stopping the motor:", error);
    res.status(500).json({ message: "Failed to stop motor", error });
  }
});

// Graceful shutdown to clean up GPIO
process.on("SIGINT", () => {
  console.log("\nShutting down...");
  motorStart.unexport();
  motorStop.unexport();
  process.exit();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
