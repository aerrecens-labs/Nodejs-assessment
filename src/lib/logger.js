const weights = { debug: 10, info: 20, warn: 30, error: 40, silent: 100 };

export function createLogger({ level = 'info', name = 'app', sink = console } = {}) {
  const threshold = weights[level] ?? weights.info;

  function write(entryLevel, message, fields) {
    if ((weights[entryLevel] ?? 0) < threshold) {
      return;
    }
    const line = {
      ts: new Date().toISOString(),
      level: entryLevel,
      name,
      message,
      ...fields,
    };
    const method = entryLevel === 'error' ? 'error' : 'log';
    sink[method](JSON.stringify(line));
  }

  return {
    debug: (message, fields) => write('debug', message, fields),
    info: (message, fields) => write('info', message, fields),
    warn: (message, fields) => write('warn', message, fields),
    error: (message, fields) => write('error', message, fields),
    child(extra) {
      return createLogger({
        level,
        name: extra.name ?? name,
        sink: {
          log: (text) => sink.log(mergeName(text, extra)),
          error: (text) => sink.error(mergeName(text, extra)),
        },
      });
    },
  };
}

function mergeName(text, extra) {
  try {
    const parsed = JSON.parse(text);
    return JSON.stringify({ ...parsed, ...extra });
  } catch {
    return text;
  }
}
