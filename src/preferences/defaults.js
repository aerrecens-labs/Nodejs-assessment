export const preferenceDefaults = {
  density: 'comfortable',
  status: 'all',
  showCompleted: true,
  pageSize: 20,
  timezone: 'UTC',
};

export function mergePreferences(overrides = {}) {
  return { ...preferenceDefaults, ...overrides };
}
