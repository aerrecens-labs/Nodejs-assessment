import { getTasks } from '../tasks.js';
import { groupBy } from '../lib/arrays.js';
import { percent } from '../lib/numbers.js';

export function listTasks(status) {
  return getTasks(status);
}

export function summarize(tasks) {
  const groups = groupBy(tasks, (task) => task.priority);
  const completed = tasks.filter((task) => task.completed).length;
  return {
    total: tasks.length,
    completed,
    active: tasks.length - completed,
    completionRate: percent(completed, tasks.length),
    byPriority: Object.fromEntries(
      [...groups.entries()].map(([priority, items]) => [priority, items.length]),
    ),
  };
}
