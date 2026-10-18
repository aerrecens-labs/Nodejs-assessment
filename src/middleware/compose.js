export function compose(middlewares, handler) {
  return middlewares.reduceRight(
    (next, middleware) => (req, res) => middleware(req, res, () => next(req, res)),
    handler,
  );
}
