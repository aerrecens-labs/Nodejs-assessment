function escapeCell(value) {
  const text = String(value ?? '');
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

export function toCsv(records, columns) {
  const header = columns.join(',');
  const lines = records.map((record) => columns.map((column) => escapeCell(record[column])).join(','));
  return [header, ...lines].join('\n');
}

export function tasksToCsv(tasks) {
  return toCsv(tasks, ['id', 'title', 'completed', 'priority']);
}
