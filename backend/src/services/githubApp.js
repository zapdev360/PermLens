const axios = require("axios");
const { createAppJWT } = require("./githubAuth");

const USER_AGENT = process.env.GH_USER_AGENT || "PermLens";

async function fetchAppBySlug(slug) {
  try {
    const res = await axios.get(`https://api.github.com/apps/${slug}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": USER_AGENT,
      },
    });

    return res.data;
  } catch (err) {
    if (err.response?.status === 404) {
      return null;
    }

    throw err;
  }
}

async function fetchOwnApp() {
  const jwt = createAppJWT();

  const res = await axios.get("https://api.github.com/app", {
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/vnd.github+json",
      "User-Agent": USER_AGENT,
    },
  });

  if (!res.data) {
    throw new Error("Failed to fetch own GitHub App");
  }

  return res.data;
}

module.exports = { fetchAppBySlug, fetchOwnApp };