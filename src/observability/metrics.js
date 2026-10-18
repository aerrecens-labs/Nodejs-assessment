export function createMetrics() {
  const counters = new Map();
  const observations = new Map();

  return {
    increment(name, amount = 1) {
      counters.set(name, (counters.get(name) ?? 0) + amount);
    },
    observe(name, value) {
      const bucket = observations.get(name) ?? [];
      bucket.push(value);
      if (bucket.length > 200) {
        bucket.shift();
      }
      observations.set(name, bucket);
    },
    snapshot() {
      const counts = Object.fromEntries(counters);
      const latency = {};
      for (const [name, values] of observations) {
        const total = values.reduce((sum, value) => sum + value, 0);
        latency[name] = {
          samples: values.length,
          avg: values.length ? Math.round(total / values.length) : 0,
          max: values.length ? Math.max(...values) : 0,
        };
      }
      return { counts, latency };
    },
  };
}
