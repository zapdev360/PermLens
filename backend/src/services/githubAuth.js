const jwt = require("jsonwebtoken");
const axios = require("axios");

const USER_AGENT = process.env.GH_USER_AGENT || "PermLens";
const REQUIRED_ENV = ["GH_APP_KEY", "GH_APP_ID", "GH_INSTALL_ID"];

function requireAppEnv() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(
      `Missing GitHub App credentials: ${missing.join(", ")}`
    );
  }
}

function createAppJWT() {
  requireAppEnv();
  const now = Math.floor(Date.now() / 1000);
  const privateKey = process.env.GH_APP_KEY.replace(/\\n/g, "\n");

  return jwt.sign(
    {
      iat: now - 60,
      exp: now + 9 * 60,
      iss: process.env.GH_APP_ID,
    },
    privateKey,
    { algorithm: "RS256" }
  );
}

async function getInstallationToken() {
  requireAppEnv();
  const token = createAppJWT();

  const res = await axios.post(
    `https://api.github.com/app/installations/${process.env.GH_INSTALL_ID}/access_tokens`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "User-Agent": USER_AGENT,
      },
    }
  );

  return res.data.token;
}

module.exports = {
  createAppJWT,
  getInstallationToken,
};