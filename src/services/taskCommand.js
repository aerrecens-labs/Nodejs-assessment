import { toggleTask } from '../tasks.js';
import { ok, err } from '../lib/result.js';

export function toggle(id) {
  const task = toggleTask(id);
  if (!task) {
    return err({ code: 'task_missing', id });
  }
  return ok(task);
}
