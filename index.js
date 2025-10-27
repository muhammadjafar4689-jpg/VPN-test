const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.get("/connect", (req, res) => {
  res.send("Connected to VPN backend!");
});

app.get("/data", (req, res) => {
  res.json({
    status: "ok",
    dailyLimit: "50MB",
    message: "Welcome to Stark VPN Reloaded!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
