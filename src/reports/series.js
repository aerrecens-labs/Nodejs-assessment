export function completionSeries(tasks) {
  const completed = tasks.filter((task) => task.completed).length;
  const active = tasks.length - completed;
  return [
    { key: 'completed', value: completed },
    { key: 'active', value: active },
  ];
}

export function prioritySeries(tasks) {
  const counts = { low: 0, medium: 0, high: 0 };
  for (const task of tasks) {
    if (counts[task.priority] !== undefined) {
      counts[task.priority] += 1;
    }
  }
  return Object.entries(counts).map(([key, value]) => ({ key, value }));
}

export function renderBars(series, width = 20) {
  const max = Math.max(1, ...series.map((item) => item.value));
  return series.map((item) => {
    const size = Math.round((item.value / max) * width);
    return `${item.key.padEnd(12, ' ')} ${'#'.repeat(size)} ${item.value}`;
  });
}
