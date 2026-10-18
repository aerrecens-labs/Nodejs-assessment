export const statusFilters = [
  { id: 'all', label: 'All tasks', description: 'Every task regardless of completion.' },
  { id: 'active', label: 'Active', description: 'Tasks that are not completed.' },
  { id: 'completed', label: 'Completed', description: 'Tasks that are marked done.' },
];

export function describeFilter(id) {
  return statusFilters.find((item) => item.id === id) ?? statusFilters[0];
}
