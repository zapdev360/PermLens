const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/favicon.ico", (_req, res) => {
  res.redirect(302, "/favicon.svg");
});

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "permlens-backend" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const labelRoutes = require("./routes/label");
app.use("/api", labelRoutes);

module.exports = app;