const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

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
  if (fs.existsSync(FAVICON_ICO)) {
    return res.sendFile(FAVICON_ICO);
  }

  return res.status(204).end();
});

app.get("/favicon.svg", (_req, res) => {
  if (fs.existsSync(FAVICON_SVG)) {
    return res.sendFile(FAVICON_SVG);
  }

  return res.status(204).end();
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