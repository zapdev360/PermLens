const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const FAVICON_SVG = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "frontend",
  "public",
  "favicon.svg"
);

const FAVICON_ICO = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "frontend",
  "public",
  "favicon.ico"
);

app.get("/favicon.ico", (_req, res) => {
  res.sendFile(FAVICON_ICO);
});

app.get("/favicon.svg", (_req, res) => {
  res.sendFile(FAVICON_SVG);
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