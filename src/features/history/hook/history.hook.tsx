import { useState } from "react";
import {
  getListFromStorage,
  setListToStorage,
} from "../../../utilities/storage.util";
import { getHistory } from "../../../utilities/util";
import { confirmAlert } from "react-confirm-alert";

export const useHistory = () => {
  const [list, setList] = useState(getListFromStorage());
  const histories = getHistory(list);

  const clearHistory = () => {
    setListToStorage([list.at(-1)!]);
    setList([list.at(-1)!]);
  };

  const handleClearHistory = () => {
    if (histories.length > 0) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className="p-2 bg-white rounded-lg shadow">
              <h1 className="text-2xl font-semibold">Are you sure?</h1>
              <p className="text-xl font-medium mb-1.5 text-gray-500">
                You want to clear history?
              </p>
              <div className="flex justify-end gap-1">
                <button
                  className="px-3 py-0.5 active:scale-90 active:opacity-90 bg-gray-200 rounded-md text-black/80"
                  onClick={onClose}
                >
                  No
                </button>
                <button
                  className="px-3 py-0.5 active:scale-90 active:opacity-90 text-white bg-teal-700 rounded-md"
                  onClick={() => {
                    clearHistory();
                    onClose();
                  }}
                >
                  Yes
                </button>
              </div>
            </div>
          );
        },
      });
    }
  };

  return {
    histories,
    handleClearHistory,
  };
};
