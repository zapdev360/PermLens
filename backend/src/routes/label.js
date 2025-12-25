const express = require("express");
const router = express.Router();
const { buildLabel } = require("../services/privacyLabel");

router.get("/app/:slug/label", (_req, res) => {
  const perms = [
    { name: "metadata", access: "read" }
  ];

  res.json(buildLabel(perms));
});

module.exports = router;