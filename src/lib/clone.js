export function clone(value) {
  if (Array.isArray(value)) {
    return value.map((item) => clone(item));
  }
  if (value && typeof value === 'object') {
    const copy = {};
    for (const key of Object.keys(value)) {
      copy[key] = clone(value[key]);
    }
    return copy;
  }
  return value;
}

export function cloneList(items) {
  return items.map((item) => ({ ...item }));
}
