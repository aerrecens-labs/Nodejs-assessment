export function recordAccess(logger, metrics, context, statusCode, started) {
  const durationMs = Date.now() - started;
  metrics.observe('http.duration_ms', durationMs);
  metrics.increment(`http.status.${statusCode}`);
  logger.debug('request', {
    requestId: context.id,
    method: context.method,
    path: context.path,
    statusCode,
    durationMs,
  });
}
