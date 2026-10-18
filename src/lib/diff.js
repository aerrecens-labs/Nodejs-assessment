export function diffKeys(before, after) {
  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  const changes = [];
  for (const key of keys) {
    if (before[key] !== after[key]) {
      changes.push({ key, from: before[key], to: after[key] });
    }
  }
  return changes;
}

export function changedFields(before, after) {
  return diffKeys(before, after).map((change) => change.key);
}
