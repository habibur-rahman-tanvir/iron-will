import { KEYS } from "../constants/constant";

export const isStarted = (): boolean => {
  const startedAt = localStorage.getItem(KEYS.STARTED_AT);
  return startedAt !== null && startedAt !== undefined;
};

export const start = (): void => {
  localStorage.setItem(KEYS.STARTED_AT, Date.now().toString());
};

export const reset = (): void => {
  alert("Reset");
};
