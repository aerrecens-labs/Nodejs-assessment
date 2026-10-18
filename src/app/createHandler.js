import { getTasks, toggleTask } from '../tasks.js';
import { parseRequestUrl } from '../http/request.js';
import { sendJson, notFound } from '../http/respond.js';
import { buildContext } from '../middleware/requestContext.js';
import { recordAccess } from '../middleware/accessLog.js';
import { matchTaskToggle } from '../http/matchers.js';
import { readStatusQuery } from '../validation/statusFilter.js';
import { readTaskId } from '../validation/taskId.js';

export function createHandler({ config, logger, metrics }) {
  return function handleRequest(req, res) {
    const started = Date.now();
    const url = parseRequestUrl(req);
    const context = buildContext(req, url);

    metrics.increment('http.requests');
    metrics.increment(`http.service.${config.serviceName}`);

    if (req.method === 'OPTIONS') {
      sendJson(res, 204, null);
      recordAccess(logger, metrics, context, 204, started);
      return;
    }

    if (req.method === 'GET' && url.pathname === '/tasks') {
      const status = readStatusQuery(url);
      sendJson(res, 200, getTasks(status));
      recordAccess(logger, metrics, context, 200, started);
      return;
    }

    const toggleMatch = matchTaskToggle(url.pathname);
    if (req.method === 'PATCH' && toggleMatch) {
      const id = readTaskId(toggleMatch);
      const task = toggleTask(id);
      if (!task) {
        sendJson(res, 404, { error: 'Task not found' });
        recordAccess(logger, metrics, context, 404, started);
        return;
      }
      sendJson(res, 200, task);
      recordAccess(logger, metrics, context, 200, started);
      return;
    }

    if (req.method === 'GET' && url.pathname === '/health') {
      sendJson(res, 200, { ok: true });
      recordAccess(logger, metrics, context, 200, started);
      return;
    }

    notFound(res);
    recordAccess(logger, metrics, context, 404, started);
  };
}
