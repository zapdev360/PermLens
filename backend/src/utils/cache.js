const CACHE_TTL = 10 * 60 * 1000;
const store = new Map();

function get(key) {
  const entry = store.get(key);
  if (!entry) return null;

  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    return null;
  }

  return entry;
}

function set(key, value) {
  const cachedAt = new Date().toISOString();

  store.set(key, {
    value,
    cachedAt,
    expiresAt: Date.now() + CACHE_TTL,
  });
}

function clear() {
  store.clear();
}

module.exports = {
  get,
  set,
  clear,
};