export function createAuditLog(limit = 200) {
  const entries = [];

  return {
    record(action, detail = {}) {
      entries.push({
        action,
        detail,
        at: new Date().toISOString(),
      });
      if (entries.length > limit) {
        entries.shift();
      }
      return entries.length;
    },
    recent(count = 20) {
      return entries.slice(-count);
    },
    size() {
      return entries.length;
    },
  };
}
