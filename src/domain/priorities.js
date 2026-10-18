export const priorities = [
  { id: 'low', label: 'Low', weight: 1, slaHours: 120 },
  { id: 'medium', label: 'Medium', weight: 2, slaHours: 48 },
  { id: 'high', label: 'High', weight: 3, slaHours: 8 },
];

export function priorityById(id) {
  return priorities.find((item) => item.id === id) ?? null;
}

export function comparePriority(left, right) {
  const a = priorityById(left)?.weight ?? 0;
  const b = priorityById(right)?.weight ?? 0;
  return b - a;
}
