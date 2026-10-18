import { systemClock } from '../lib/clock.js';

export function healthReport(extra = {}) {
  return {
    ok: true,
    service: 'task-api',
    time: systemClock.iso(),
    ...extra,
  };
}
