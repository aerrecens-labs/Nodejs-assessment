const listeners = new Map();

export function on(event, handler) {
  const list = listeners.get(event) ?? [];
  list.push(handler);
  listeners.set(event, list);
  return () => {
    const current = listeners.get(event) ?? [];
    listeners.set(
      event,
      current.filter((item) => item !== handler),
    );
  };
}

export function emit(event, payload) {
  const list = listeners.get(event) ?? [];
  for (const handler of list) {
    handler(payload);
  }
}

export function listenerCount(event) {
  return (listeners.get(event) ?? []).length;
}
