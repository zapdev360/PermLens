const { categories, permissions } = require("../utils/loadShared");

function buildLabel(perms) {
  const used = new Set();
  let sensitivity = "low";

  perms.forEach(({ name }) => {
    const perm = permissions[name];
    if (!perm) return;

    const key = perm.category;
    used.add(key);

    const level = categories[key].sensitivity;
    if (level === "high") sensitivity = "high";
    if (level === "moderate" && sensitivity === "low") {
      sensitivity = "moderate";
    }
  });

  return {
    data_categories: Array.from(used).map((key) => ({
      key,
      ...categories[key],
    })),
    overall_sensitivity: sensitivity,
    permissions: perms,
    notes: [
      "Based on publicly available GitHub App permission metadata.",
      "Does not inspect runtime behavior or private repositories.",
    ],
  };
}

module.exports = { buildLabel };