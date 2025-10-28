const express = require("express");
const cors = require("cors");
const app = express();

// ✅ Enable CORS (this allows your HTML app to connect safely)
app.use(cors());

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Server is live!");
});

// ✅ VPN Connect route
app.get("/connect", (req, res) => {
  res.json({ status: "connected", message: "Connected to VPN backend!" });
});

// ✅ Example Data API (optional)
app.get("/data", (req, res) => {
  res.json({
    status: "ok",
    dailyLimit: "50MB",
    message: "Welcome to Stark VPN Reloaded!"
  });
});

// ✅ Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
