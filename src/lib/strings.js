export function collapseWhitespace(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

export function truncate(value, max) {
  const text = String(value ?? '');
  if (text.length <= max) {
    return text;
  }
  if (max <= 1) {
    return text.slice(0, max);
  }
  return `${text.slice(0, max - 1)}…`;
}

export function capitalize(value) {
  const text = String(value ?? '');
  if (!text) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function includesFold(haystack, needle) {
  return String(haystack).toLowerCase().includes(String(needle).toLowerCase());
}

export function pad(value, length, ch = ' ') {
  const text = String(value);
  if (text.length >= length) {
    return text;
  }
  return ch.repeat(length - text.length) + text;
}
