const axios = require("axios");
const { createAppJWT } = require("./githubAuth");

async function fetchAppBySlug(slug) {
  try {
    const res = await axios.get(`https://api.github.com/apps/${slug}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "PermLens",
      },
    });
    return res.data;
  } catch (err) {
    if (err.response?.status === 404) return null;
    throw err;
  }
}

async function fetchOwnApp() {
  const jwt = createAppJWT();

  const res = await axios.get("https://api.github.com/app", {
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "PermLens",
    },
  });

  return res.data;
}

module.exports = { fetchAppBySlug, fetchOwnApp };