import type { List } from "../features/home/hook/counter.hook";

const LIST_KEY: string = "list";

export const getListFromStorage = (): List => {
  const list = localStorage.getItem(LIST_KEY);
  if (!list) return [];
  return JSON.parse(list);
};

export const setListToStorage = (list: List): void => {
  localStorage.setItem(LIST_KEY, JSON.stringify(list));
};
