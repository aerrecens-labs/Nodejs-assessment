export class HttpError extends Error {
  constructor(statusCode, message, code = 'http_error') {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.code = code;
  }
}

export function notFoundError(message = 'Not found') {
  return new HttpError(404, message, 'not_found');
}

export function badRequest(message) {
  return new HttpError(400, message, 'bad_request');
}
