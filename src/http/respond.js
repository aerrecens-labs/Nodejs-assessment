import { jsonHeaders } from './headers.js';

export function sendJson(res, statusCode, body) {
  const payload = JSON.stringify(body);
  res.writeHead(statusCode, jsonHeaders());
  res.end(payload);
}

export function notFound(res) {
  sendJson(res, 404, { error: 'Not found' });
}
