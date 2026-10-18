import { randomBytes } from 'node:crypto';

export function buildContext(req, url) {
  return {
    id: randomBytes(8).toString('hex'),
    method: req.method ?? 'GET',
    path: url.pathname,
    query: url.search,
    startedAt: Date.now(),
  };
}
