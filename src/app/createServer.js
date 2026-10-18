import http from 'node:http';
import { loadConfig } from '../config/index.js';
import { createLogger } from '../lib/logger.js';
import { createMetrics } from '../observability/metrics.js';
import { createHandler } from './createHandler.js';
import { warmRuntime } from '../bootstrap/register.js';

export function startServer(options = {}) {
  const config = options.config ?? loadConfig(process.env);
  const logger = options.logger ?? createLogger({ level: config.logLevel, name: config.serviceName });
  const metrics = options.metrics ?? createMetrics();
  warmRuntime({ config, logger, metrics });
  const handler = createHandler({ config, logger, metrics });

  const server = http.createServer(handler);
  server.listen(config.port, () => {
    logger.debug('listening', { url: `http://localhost:${config.port}` });
    console.log(`Task API listening on http://localhost:${config.port}`);
  });

  return server;
}
