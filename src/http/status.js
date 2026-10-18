export const statusText = {
  200: 'OK',
  204: 'No Content',
  400: 'Bad Request',
  404: 'Not Found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
};

export function isSuccess(code) {
  return code >= 200 && code < 300;
}
