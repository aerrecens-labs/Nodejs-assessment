export function groupBy(items, keyFn) {
  const groups = new Map();
  for (const item of items) {
    const key = keyFn(item);
    const bucket = groups.get(key);
    if (bucket) {
      bucket.push(item);
    } else {
      groups.set(key, [item]);
    }
  }
  return groups;
}

export function unique(items) {
  return [...new Set(items)];
}

export function sortBy(items, keyFn, direction = 'asc') {
  const copy = [...items];
  const factor = direction === 'desc' ? -1 : 1;
  copy.sort((a, b) => {
    const left = keyFn(a);
    const right = keyFn(b);
    if (left < right) return -1 * factor;
    if (left > right) return 1 * factor;
    return 0;
  });
  return copy;
}

export function chunk(items, size) {
  const groups = [];
  const step = Math.max(1, size);
  for (let index = 0; index < items.length; index += step) {
    groups.push(items.slice(index, index + step));
  }
  return groups;
}

export function indexBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    map.set(keyFn(item), item);
  }
  return map;
}
