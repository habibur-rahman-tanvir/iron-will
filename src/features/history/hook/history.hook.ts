import { useState } from "react";
import {
  getListFromStorage,
  setListToStorage,
} from "../../../utilities/storage.util";
import { getHistory } from "../../../utilities/util";

export const useHistory = () => {
  const [list, setList] = useState(getListFromStorage());
  const histories = getHistory(list);

  const handleClearHistory = () => {
    if (list.length > 0) {
      setListToStorage([list.at(-1)!]);
      setList([list.at(-1)!]);
    }
  };

  return {
    histories,
    handleClearHistory,
  };
};
