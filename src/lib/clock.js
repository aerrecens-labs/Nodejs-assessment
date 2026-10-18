export function createClock(now = () => Date.now()) {
  return {
    now,
    iso: () => new Date(now()).toISOString(),
    elapsed(startedAt) {
      return Math.max(0, now() - startedAt);
    },
  };
}

export const systemClock = createClock();

export function formatElapsed(ms) {
  if (ms < 1000) {
    return `${ms}ms`;
  }
  const seconds = ms / 1000;
  if (seconds < 60) {
    return `${seconds.toFixed(1)}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remain = Math.round(seconds % 60);
  return `${minutes}m ${remain}s`;
}
