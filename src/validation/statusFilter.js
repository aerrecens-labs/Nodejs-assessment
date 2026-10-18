const KNOWN = new Set(['all', 'active', 'completed']);

export function readStatusQuery(url) {
  return url.searchParams.get('status') ?? 'all';
}

export function isKnownStatus(status) {
  return KNOWN.has(status);
}

export function normalizeStatus(status) {
  return isKnownStatus(status) ? status : 'all';
}
