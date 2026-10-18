export function tokenize(value) {
  return String(value ?? '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 1);
}

export function scoreText(query, text) {
  const tokens = tokenize(query);
  if (tokens.length === 0) {
    return 0;
  }
  const haystack = String(text ?? '').toLowerCase();
  let score = 0;
  for (const token of tokens) {
    if (haystack === token) {
      score += 5;
    } else if (haystack.startsWith(token)) {
      score += 3;
    } else if (haystack.includes(token)) {
      score += 1;
    }
  }
  return score;
}

export function rankByText(items, query, textFn) {
  return items
    .map((item) => ({ item, score: scoreText(query, textFn(item)) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);
}
