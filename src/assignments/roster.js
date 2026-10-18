export function assignRoundRobin(tasks, people) {
  if (people.length === 0) {
    return tasks.map((task) => ({ ...task, owner: null }));
  }
  return tasks.map((task, index) => ({
    ...task,
    owner: people[index % people.length],
  }));
}

export function ownersOf(assignments) {
  const counts = new Map();
  for (const item of assignments) {
    if (!item.owner) continue;
    counts.set(item.owner, (counts.get(item.owner) ?? 0) + 1);
  }
  return [...counts.entries()].map(([owner, count]) => ({ owner, count }));
}
