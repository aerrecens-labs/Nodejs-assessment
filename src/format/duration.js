const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function parseDuration(text) {
  const match = /^(\d+)(ms|s|m|h|d)$/.exec(String(text).trim());
  if (!match) {
    return null;
  }
  const amount = Number(match[1]);
  const unit = match[2];
  const scale = { ms: 1, s: 1000, m: MINUTE, h: HOUR, d: DAY }[unit];
  return amount * scale;
}

export function formatDuration(ms) {
  if (ms < 1000) return `${ms}ms`;
  if (ms < MINUTE) return `${Math.round(ms / 1000)}s`;
  if (ms < HOUR) return `${Math.round(ms / MINUTE)}m`;
  if (ms < DAY) return `${Math.round(ms / HOUR)}h`;
  return `${Math.round(ms / DAY)}d`;
}
