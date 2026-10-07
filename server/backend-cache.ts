const memoryCache = new Map<string, { data: unknown; expires: number }>();

export function getCachedData<T = unknown>(key: string): T | null {
  const item = memoryCache.get(key);
  if (!item) return null;
  if (Date.now() > item.expires) {
    memoryCache.delete(key);
    return null;
  }
  return item.data as T;
}

export function setCachedData(key: string, data: unknown, ttlSeconds = 60): void {
  memoryCache.set(key, {
    data,
    expires: Date.now() + ttlSeconds * 1000,
  });
}
