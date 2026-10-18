const TOKEN = /\s*(\w+)\s*(:|=)\s*("[^"]*"|'[^']*'|\S+)\s*/y;

export function parseQuery(input) {
  const text = String(input ?? '').trim();
  const filters = [];
  let free = '';
  let index = 0;
  TOKEN.lastIndex = 0;

  while (index < text.length) {
    TOKEN.lastIndex = index;
    const match = TOKEN.exec(text);
    if (match && match.index === index) {
      const raw = match[3];
      const value = raw.replace(/^['"]|['"]$/g, '');
      filters.push({ field: match[1], value });
      index = TOKEN.lastIndex;
      continue;
    }
    free += text[index];
    index += 1;
  }

  return {
    text: free.replace(/\s+/g, ' ').trim(),
    filters,
  };
}
