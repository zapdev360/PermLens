const axios = require("axios");
const { createAppJWT } = require("./githubAuth");

async function fetchApp() {
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

module.exports = { fetchApp };