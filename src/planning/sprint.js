import { businessDaysBetween } from '../lib/schedule.js';

export function planSprint(tasks, start, end) {
  const days = Math.max(1, businessDaysBetween(start, end));
  const points = { low: 1, medium: 2, high: 3 };
  const active = tasks.filter((task) => !task.completed);
  const committed = [];
  let used = 0;
  const capacity = days * 3;

  for (const task of active) {
    const cost = points[task.priority] ?? 2;
    if (used + cost > capacity) {
      continue;
    }
    committed.push({ ...task, points: cost });
    used += cost;
  }

  return {
    start: start.toISOString(),
    end: end.toISOString(),
    capacity,
    used,
    remaining: capacity - used,
    committed,
  };
}
