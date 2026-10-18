import { defaults, logLevels } from './defaults.js';

function readPort(env) {
  const raw = env.PORT;
  if (raw === undefined || raw === '') {
    return defaults.port;
  }
  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed <= 0 || parsed > 65535) {
    return defaults.port;
  }
  return parsed;
}

function readLogLevel(env) {
  const level = String(env.LOG_LEVEL ?? defaults.logLevel).toLowerCase();
  return logLevels.includes(level) ? level : defaults.logLevel;
}

export function loadConfig(env = process.env) {
  return {
    serviceName: env.SERVICE_NAME || defaults.serviceName,
    port: readPort(env),
    logLevel: readLogLevel(env),
    cors: { ...defaults.cors },
    limits: { ...defaults.limits },
    features: { ...defaults.features },
  };
}
