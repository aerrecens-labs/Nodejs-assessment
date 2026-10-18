export function pick(source, keys) {
  const result = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      result[key] = source[key];
    }
  }
  return result;
}

export function omit(source, keys) {
  const blocked = new Set(keys);
  const result = {};
  for (const key of Object.keys(source)) {
    if (!blocked.has(key)) {
      result[key] = source[key];
    }
  }
  return result;
}

export function hasOwn(source, key) {
  return Object.prototype.hasOwnProperty.call(source, key);
}

export function shallowEqual(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  return leftKeys.every((key) => left[key] === right[key]);
}
