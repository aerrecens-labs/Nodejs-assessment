export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function isIntegerInRange(value, min, max) {
  return Number.isInteger(value) && value >= min && value <= max;
}

export function percent(part, total) {
  if (!total) {
    return 0;
  }
  return Math.round((part / total) * 1000) / 10;
}

export function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}
