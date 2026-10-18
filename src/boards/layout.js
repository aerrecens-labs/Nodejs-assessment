import { columns, columnForTask } from './columns.js';
import { comparePriority } from '../domain/priorities.js';

export function layoutBoard(tasks) {
  const lanes = columns.map((column) => ({
    ...column,
    tasks: [],
  }));
  const byId = new Map(lanes.map((lane) => [lane.id, lane]));

  for (const task of tasks) {
    const column = columnForTask(task);
    byId.get(column.id).tasks.push(task);
  }

  for (const lane of lanes) {
    lane.tasks.sort((a, b) => comparePriority(a.priority, b.priority) || a.id - b.id);
    lane.count = lane.tasks.length;
    lane.overLimit = lane.limit !== null && lane.tasks.length > lane.limit;
  }

  return lanes;
}
