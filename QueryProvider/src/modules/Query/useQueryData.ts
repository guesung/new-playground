import { useSyncExternalStore } from "react";
import { getQueryData, subscribeQueryData } from "./QueryStore";

export function useQueryData(key: string) {
  return useSyncExternalStore(
    (cb) => subscribeQueryData(key, cb),
    () => getQueryData(key)
  );
}
