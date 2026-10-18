export function capacityFor(team, days) {
  const focus = 0.7;
  return Math.round(team.capacity * days * focus);
}

export function overload(team, assignedHours, days) {
  const capacity = capacityFor(team, days);
  return {
    teamId: team.id,
    capacity,
    assignedHours,
    overload: Math.max(0, assignedHours - capacity),
  };
}
