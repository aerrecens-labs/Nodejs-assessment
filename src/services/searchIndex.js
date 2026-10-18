import { tokenize } from '../text/search.js';

export function buildSearchIndex(records) {
  const inverted = new Map();

  for (const record of records) {
    const tokens = tokenize(`${record.title} ${record.detail ?? ''} ${record.team ?? ''}`);
    for (const token of tokens) {
      const bucket = inverted.get(token) ?? new Set();
      bucket.add(record.id);
      inverted.set(token, bucket);
    }
  }

  return {
    size() {
      return inverted.size;
    },
    lookup(token) {
      return [...(inverted.get(token) ?? [])];
    },
    tokens() {
      return [...inverted.keys()];
    },
  };
}
