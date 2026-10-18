import { priorityById } from './priorities.js';
import { truncate } from '../lib/strings.js';

export function toTaskView(task) {
  const priority = priorityById(task.priority);
  return {
    id: task.id,
    title: task.title,
    completed: task.completed,
    priority: task.priority,
    priorityLabel: priority?.label ?? task.priority,
    summary: truncate(task.title, 80),
  };
}

export function toTaskViews(tasks) {
  return tasks.map((task) => toTaskView(task));
}
