const express = require("express");
const cors = require("cors"); // allow connections from your HTML app
const app = express();

app.use(cors()); // enable CORS for all routes
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Server is live and ready for VPN connection!");
});

// Connect route
app.get("/connect", (req, res) => {
  res.json({
    status: "connected",
    message: "Connected to VPN backend!"
  });
});

// Example data endpoint
app.get("/data", (req, res) => {
  res.json({
    status: "ok",
    dailyLimit: "50MB",
    message: "Welcome to Stark VPN Reloaded!"
  });
});

// Start server
app.listen(10000, () => {
  console.log("Server running on port 10000");
});
