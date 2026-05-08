import { useEffect, useState } from "react";
import {
  getListFromStorage,
  setListToStorage,
} from "../../../utilities/storage.util";
import { confirmAlert } from "react-confirm-alert";
import {
  extractDateTime,
  type DateTimeExtractedType,
} from "../../../utilities/util";

export type List = Array<number>;

const MAX_PROGRESS = 86_400 as const;

export const useCounter = () => {
  const [list, setList] = useState<List>(getListFromStorage());
  const [daysHoursMinsSec, setDaysHoursMinsSec] =
    useState<DateTimeExtractedType>(
      list.length > 0
        ? extractDateTime(list.at(-1))
        : { days: 0, hours: 0, minutes: 0, seconds: 0, currentProgress: 0 },
    );

  function handleReset() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="p-2 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-semibold">Are you sure?</h1>
            <p className="text-xl font-medium mb-1.5 text-gray-500">
              You want to reset counter?
            </p>
            <div className="flex justify-end gap-1">
              <button
                className="px-3 py-0.5 bg-gray-200 rounded-md text-black/80"
                onClick={onClose}
              >
                No
              </button>
              <button
                className="px-3 py-0.5 text-white bg-teal-700 rounded-md"
                onClick={() => {
                  setList((prev) => {
                    const newList: List = [...prev, Date.now()];
                    setListToStorage(newList);
                    return newList;
                  });
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

  useEffect(() => {
    if (list.length < 1) return;

    setTimeout(() => {
      const x = extractDateTime(list.at(-1));
      setDaysHoursMinsSec(x);
    }, 500);
  }, [list, daysHoursMinsSec]);

  return {
    MAX_PROGRESS,
    runningStatus: list.length > 0,
    handleReset,
    daysHoursMinsSec,
  };
};
