import { prioritySeries, completionSeries, renderBars } from './series.js';
import { dueLabel } from '../lib/schedule.js';

export function weeklyBrief(tasks, now = new Date()) {
  const horizon = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  return {
    generatedAt: now.toISOString(),
    window: dueLabel(now, horizon),
    completion: completionSeries(tasks),
    priorities: prioritySeries(tasks),
    chart: renderBars(prioritySeries(tasks)),
    headlines: tasks
      .filter((task) => !task.completed && task.priority === 'high')
      .map((task) => task.title),
  };
}
