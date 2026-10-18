import { labels } from '../catalog/labels.js';
import { teams } from '../catalog/teams.js';
import { templates } from '../catalog/templates.js';
import { notificationTemplates } from '../catalog/notifications.js';
import { buildSearchIndex } from '../services/searchIndex.js';
import { createAuditLog } from '../services/auditLog.js';
import { workloadByTeam } from '../services/workload.js';
import { createMemoryStore } from '../store/memoryStore.js';
import { on } from '../events/bus.js';
import { events } from '../events/names.js';
import { describeFilter } from '../domain/filters.js';
import { priorities } from '../domain/priorities.js';
import { initialTasks } from '../data.js';
import { summarize } from '../services/taskQuery.js';
import { layoutBoard } from '../boards/layout.js';
import { tasksToCsv } from '../exporters/csv.js';
import { tasksFromCsv } from '../importers/csv.js';
import { weeklyBrief } from '../reports/weekly.js';
import { tasksToMarkdown } from '../exporters/markdown.js';
import { parseQuery } from '../query/parser.js';
import { selectTasks } from '../query/apply.js';
import { planSprint } from '../planning/sprint.js';
import { assignRoundRobin } from '../assignments/roster.js';
import { createThread } from '../comments/thread.js';
import { mergePreferences } from '../preferences/defaults.js';

export function warmRuntime({ logger }) {
  const labelStore = createMemoryStore(labels);
  const teamStore = createMemoryStore(teams);
  const templateStore = createMemoryStore(templates);
  const index = buildSearchIndex(templates);
  const audit = createAuditLog();
  const snapshot = {
    labels: labelStore.size(),
    teams: teamStore.size(),
    templates: templateStore.size(),
    priorities: priorities.length,
    filters: ['all', 'active', 'completed'].map((id) => describeFilter(id).label),
    indexed: index.size(),
    workload: workloadByTeam(teams, templates),
    seedSummary: summarize(initialTasks),
    notifications: notificationTemplates.length,
    boardLanes: layoutBoard(initialTasks).length,
    csvRows: tasksFromCsv(tasksToCsv(initialTasks)).length,
    briefLines: tasksToMarkdown(initialTasks).split('\n').length,
    weeklyHeadlines: weeklyBrief(initialTasks).headlines.length,
    querySample: selectTasks(initialTasks, parseQuery('priority:high')).length,
    sprintItems: planSprint(initialTasks, new Date(), new Date(Date.now() + 5 * 86400000)).committed.length,
    owners: assignRoundRobin(initialTasks, ['ada', 'grace']).length,
    commentsReady: createThread(1).list().length === 0,
    preferences: mergePreferences({ pageSize: 25 }).pageSize,
  };

  on(events.serverStarted, () => {
    audit.record('server.started', { service: 'task-api' });
  });

  logger.debug('runtime.warm', snapshot);
  return { labelStore, teamStore, templateStore, index, audit, snapshot };
}
