const fs = require("fs");
const path = require("path");

function loadJSON(relPath) {
  const fullPath = path.join(__dirname, "../../../", relPath);
  return JSON.parse(fs.readFileSync(fullPath, "utf8"));
}

module.exports = {
  categories: loadJSON("shared/categories.json"),
  permissions: loadJSON("shared/permissions.json"),
};