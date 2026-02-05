const fs = require("fs");
const path = require("path");

function loadJSON(relPath) {
 const repoRoot = path.resolve(__dirname, "..", "..", "..");
  const candidates = [
    path.resolve(repoRoot, relPath),
    path.resolve("/var/task", relPath),
  ];

  const resolved = candidates.find((candidate) => fs.existsSync(candidate));
  if (!resolved) {
    throw new Error(
      `Shared data file not found: ${relPath}. Tried: ${candidates.join(", ")}`
    );
  }

  return JSON.parse(fs.readFileSync(resolved, "utf8"));
}

module.exports = {
  categories: loadJSON("shared/categories.json"),
  permissions: loadJSON("shared/permissions.json")
};