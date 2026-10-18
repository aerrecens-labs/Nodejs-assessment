export function readTaskId(match) {
  return Number(match[1]);
}

export function isTaskId(value) {
  return Number.isInteger(value) && value > 0;
}
