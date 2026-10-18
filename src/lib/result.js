export function ok(value) {
  return { ok: true, value };
}

export function err(error) {
  return { ok: false, error };
}

export function mapResult(result, fn) {
  if (!result.ok) {
    return result;
  }
  return ok(fn(result.value));
}

export function unwrap(result) {
  if (!result.ok) {
    throw result.error instanceof Error ? result.error : new Error(String(result.error));
  }
  return result.value;
}
