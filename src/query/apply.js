import { includesFold } from '../lib/strings.js';

export function matchesQuery(task, parsed) {
  if (parsed.text && !includesFold(task.title, parsed.text)) {
    return false;
  }
  for (const filter of parsed.filters) {
    if (filter.field === 'priority' && task.priority !== filter.value) {
      return false;
    }
    if (filter.field === 'status') {
      const completed = filter.value === 'completed';
      const active = filter.value === 'active';
      if (completed && !task.completed) return false;
      if (active && task.completed) return false;
    }
    if (filter.field === 'id' && String(task.id) !== filter.value) {
      return false;
    }
  }
  return true;
}

export function selectTasks(tasks, parsed) {
  return tasks.filter((task) => matchesQuery(task, parsed));
}
