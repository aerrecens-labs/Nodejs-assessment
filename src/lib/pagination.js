export function paginate(items, page = 1, pageSize = 20) {
  const size = Math.max(1, pageSize);
  const current = Math.max(1, page);
  const start = (current - 1) * size;
  const slice = items.slice(start, start + size);
  const pages = Math.max(1, Math.ceil(items.length / size));
  return {
    items: slice,
    page: current,
    pageSize: size,
    total: items.length,
    pages,
    hasNext: current < pages,
    hasPrev: current > 1,
  };
}

export function parsePage(raw, fallback = 1) {
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1) {
    return fallback;
  }
  return value;
}
