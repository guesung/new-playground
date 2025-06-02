import { createContext, PropsWithChildren, useContext } from "react";
import { Status } from "./types";
import { getQueryData, setQueryData } from "./QueryStore";

interface QueryProviderProps extends PropsWithChildren {}

export interface QueryClientContextType {
  getQueryData: (queryKey: string) => unknown;
  setQueryData: (queryKey: string, data: unknown) => void;
  getQueryStatus: (queryKey: string) => Status;
  setQueryStatus: (queryKey: string, status: Status) => void;
}

const statusStore: Record<string, Status> = {};
const statusListeners: Record<string, Set<() => void>> = {};

function setQueryStatus(queryKey: string, status: Status) {
  statusStore[queryKey] = status;
  statusListeners[queryKey]?.forEach((cb) => cb());
}

function getQueryStatus(queryKey: string): Status {
  return statusStore[queryKey] ?? "idle";
}

function subscribeQueryStatus(queryKey: string, cb: () => void) {
  if (!statusListeners[queryKey]) statusListeners[queryKey] = new Set();
  statusListeners[queryKey].add(cb);
  return () => statusListeners[queryKey].delete(cb);
}

const QueryClientContext = createContext<QueryClientContextType>({
  getQueryData: () => {
    throw new Error("QueryProvider를 찾을 수 없습니다.");
  },
  setQueryData: () => {
    throw new Error("QueryProvider를 찾을 수 없습니다.");
  },
  getQueryStatus: () => "idle",
  setQueryStatus: () => {
    throw new Error("QueryProvider를 찾을 수 없습니다.");
  },
});
export const useQueryClient = () => useContext(QueryClientContext);

export default function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientContext.Provider
      value={{
        getQueryData,
        setQueryData,
        getQueryStatus,
        setQueryStatus,
      }}
    >
      {children}
    </QueryClientContext.Provider>
  );
}
