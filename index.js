const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.get("/connect", (req, res) => {
  res.send("Connected to VPN backend!");
});

// ✅ New API endpoint to send data (example)
app.get("/data", (req, res) => {
  res.json({
    status: "ok",
    dailyLimit: "50MB",
    message: "Welcome to Stark VPN Reloaded!"
  });
});

app.listen(10000, () => {
  console.log("Server running on port 10000");
});
