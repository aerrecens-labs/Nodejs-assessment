export function isPositiveInt(value) {
  return Number.isInteger(value) && value > 0;
}

export function nextId(items) {
  let max = 0;
  for (const item of items) {
    if (typeof item.id === 'number' && item.id > max) {
      max = item.id;
    }
  }
  return max + 1;
}

export function parseNumericId(raw) {
  if (!/^\d+$/.test(String(raw))) {
    return null;
  }
  const id = Number(raw);
  return isPositiveInt(id) ? id : null;
}
