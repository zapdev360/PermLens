const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const labelRoutes = require("./routes/label");
app.use("/api", labelRoutes);

module.exports = app;