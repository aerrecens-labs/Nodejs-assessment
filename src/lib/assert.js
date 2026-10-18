export function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

export function assertString(value, name) {
  assert(typeof value === 'string', `${name} must be a string`);
  return value;
}

export function assertNumber(value, name) {
  assert(typeof value === 'number' && Number.isFinite(value), `${name} must be a finite number`);
  return value;
}
