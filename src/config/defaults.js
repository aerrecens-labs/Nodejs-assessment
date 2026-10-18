export const defaults = {
  serviceName: 'task-api',
  port: 3000,
  logLevel: 'info',
  cors: {
    origin: '*',
    methods: 'GET, PATCH, OPTIONS',
    headers: 'Content-Type',
  },
  limits: {
    maxTitleLength: 180,
    maxTasks: 5000,
    requestTimeoutMs: 10000,
  },
  features: {
    includeCount: false,
    strictStatus: false,
  },
};

export const logLevels = ['debug', 'info', 'warn', 'error', 'silent'];
