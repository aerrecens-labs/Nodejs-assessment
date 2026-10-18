export const columns = [
  { id: 'backlog', title: 'Backlog', statuses: ['active'], limit: null },
  { id: 'doing', title: 'In progress', statuses: ['active'], limit: 5 },
  { id: 'done', title: 'Done', statuses: ['completed'], limit: null },
];

export function columnById(id) {
  return columns.find((column) => column.id === id) ?? null;
}

export function columnForTask(task) {
  if (task.completed) {
    return columnById('done');
  }
  return columnById('backlog');
}
