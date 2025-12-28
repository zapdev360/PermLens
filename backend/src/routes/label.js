const express = require("express");
const router = express.Router();
const { buildLabel } = require("../services/privacyLabel");
const { fetchAppBySlug, fetchOwnApp } = require("../services/githubApp");

router.get("/app/:slug/label", async (req, res) => {
  const { slug } = req.params;

  try {
    let app = await fetchAppBySlug(slug);
    let resolved = true;

    if (!app) {
      app = await fetchOwnApp();
      resolved = false;
    }

    const perms = Object.entries(app.permissions || {}).map(
      ([name, access]) => ({ name, access })
    );

    res.json({
      resolved,
      label: buildLabel(perms),
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to fetch GitHub App metadata",
    });
  }
});

module.exports = router;