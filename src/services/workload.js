import { groupBy } from '../lib/arrays.js';

export function workloadByTeam(teams, templates) {
  const grouped = groupBy(templates, (item) => item.team);
  return teams.map((team) => {
    const items = grouped.get(team.id) ?? [];
    const high = items.filter((item) => item.priority === 'high').length;
    return {
      teamId: team.id,
      name: team.name,
      openTemplates: items.length,
      highPriority: high,
    };
  });
}

export function busiestTeam(report) {
  return [...report].sort((a, b) => b.openTemplates - a.openTemplates)[0] ?? null;
}
