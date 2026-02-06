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
     if (!key || !categories[key]) {
      used.add("unknown");
      return;
    }
    used.add(key);

    const level = categories[key].sensitivity;
    if (level === "high") sensitivity = "high";
    if (level === "moderate" && sensitivity === "low") {
      sensitivity = "moderate";
    }
  });

  const orderedCategories = Array.from(used)
    .map((key) => ({
      key,
      ...categories[key],
    }))
    .sort((a, b) => {
      if (a.key === "unknown") return 1;
      if (b.key === "unknown") return -1;

      const order = {
        high: 0,
        moderate: 1,
        low: 2,
      };

      return (order[a.sensitivity] ?? 99) - (order[b.sensitivity] ?? 99);
    });

  return {
    data_categories: orderedCategories,
    overall_sensitivity: sensitivity,
    permissions: perms,
    notes: [
      "Derived from declared GitHub App permissions.",
      "Based on public GitHub metadata only; no runtime or code inspection.",
    ],
  };
}

module.exports = { buildLabel };