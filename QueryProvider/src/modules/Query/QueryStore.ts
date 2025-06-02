// QueryStore.ts
type Listener = () => void;
const dataStore: Record<string, unknown> = {};
const listeners: Record<string, Set<Listener>> = {};

export function setQueryData(key: string, value: unknown) {
  dataStore[key] = value;
  listeners[key]?.forEach((cb) => cb());
}

export function getQueryData(key: string) {
  return dataStore[key];
}

export function subscribeQueryData(key: string, cb: Listener) {
  if (!listeners[key]) listeners[key] = new Set();
  listeners[key].add(cb);
  return () => listeners[key].delete(cb);
}
