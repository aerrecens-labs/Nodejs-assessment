const TOGGLE = /^\/tasks\/(\d+)\/toggle$/;

export function matchTaskToggle(pathname) {
  return pathname.match(TOGGLE);
}

export function isHealthPath(pathname) {
  return pathname === '/health';
}

export function isTaskListPath(pathname) {
  return pathname === '/tasks';
}
