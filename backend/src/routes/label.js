const express = require("express");
const cache = require("../utils/cache");
const { buildLabel } = require("../services/privacyLabel");
const { fetchAppBySlug, fetchOwnApp } = require("../services/githubApp");

const router = express.Router();

router.get("/app/:slug/label", async (req, res) => {
  const { slug } = req.params;

  const cached = cache.get(slug);
  if (cached) {
    return res.json({
      ...cached.value,
      cache: {
        hit: true,
        cached_at: cached.cachedAt,
      },
      api: {
        unauthenticated_hit: false,
        authenticated_hit: false,
      },
    });
  }

  let resolved = false;
  let fallback = false;

  const rateLimits = {
    unauthenticated: false,
    authenticated: false,
  };

  const apiHits = {
    unauthenticated_hit: false,
    authenticated_hit: false,
  };

  let app = null;

  try {
    apiHits.unauthenticated_hit = true;
    app = await fetchAppBySlug(slug);
  } catch (err) {
    const status = err.response?.status;
    const message = err.response?.data?.message?.toLowerCase() || "";

    if (status === 403 && message.includes("rate limit")) {
      rateLimits.unauthenticated = true;
    } else if (status !== 404) {
      return res.status(500).json({
        resolved: false,
        fallback: false,
        rate_limits: rateLimits,
        error: "Failed to resolve GitHub App",
      });
    }
  }

  if (!app) {
    fallback = true;

    try {
      apiHits.authenticated_hit = true;
      app = await fetchOwnApp();
    } catch (authErr) {
      const status = authErr.response?.status;
      const message = authErr.response?.data?.message?.toLowerCase() || "";

      if (status === 403 && message.includes("rate limit")) {
        rateLimits.authenticated = true;
      }

      return res.json({
        resolved: false,
        fallback: false,
        rate_limits: rateLimits,
        api: apiHits,
        cache: {
          hit: false,
          cached_at: null,
        },
        error: "GitHub API rate limit exceeded",
      });
    }
  } else {
    resolved = true;
  }

  if (!app.permissions) {
    return res.json({
      resolved: false,
      fallback,
      rate_limits: rateLimits,
      api: apiHits,
      cache: {
        hit: false,
        cached_at: null,
      },
      error: "App permissions unavailable",
    });
  }

  const perms = Object.entries(app.permissions).map(
    ([name, access]) => ({ name, access })
  );

  const response = {
    resolved,
    fallback,
    rate_limits: rateLimits,
    api: apiHits,
    cache: {
      hit: false,
      cached_at: null,
    },
    label: buildLabel(perms),
  };

  cache.set(slug, response);

  return res.json(response);
});

module.exports = router;