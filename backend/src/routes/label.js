const express = require("express");
const router = express.Router();
const { buildLabel } = require("../services/privacyLabel");
const { fetchApp } = require("../services/githubApp");

router.get("/app/:slug/label", async (_req, res) => {
  try {
    const app = await fetchApp();

    const perms = Object.entries(app.permissions || {}).map(
      ([name, access]) => ({ name, access })
    );

    res.json(buildLabel(perms));
  } catch (err) {
    console.error(err.response?.data || err.message);

    res.status(500).json({
      error: "Failed to fetch GitHub App metadata",
    });
  }
});

module.exports = router;