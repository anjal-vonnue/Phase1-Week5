export function memoize(fn: (...args: unknown[]) => unknown): unknown {
  const cache = new Map();

  return function (...args: unknown[]) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
