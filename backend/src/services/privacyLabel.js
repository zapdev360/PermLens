const { categories, permissions } = require("../utils/loadShared");

function buildLabel(perms) {
  if (!Array.isArray(perms)) {
    throw new Error("Invalid permissions input");
  }

  const used = new Set();
  let sensitivity = "low";

  perms.forEach(({ name }) => {
    const perm = permissions[name];
    if (!perm) {
      used.add("unknown");
      return;
    }

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
      "Derived from declared GitHub App permissions.",
      "Based on public GitHub metadata only; no runtime or code inspection.",
    ],
  };
}

module.exports = { buildLabel };