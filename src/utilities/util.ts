import type { List } from "../features/home/hook/counter.hook";

export interface DateTimeExtractedType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  currentProgress: number;
}

const ONE_DAY_IN_SECONDS = 24 * 60 * 60;

export const extractDateTime = (
  previousTimestamp: number,
  lastTimestamp: number = Date.now(),
): DateTimeExtractedType => {
  const diffMs = Math.abs(lastTimestamp - previousTimestamp);
  const totalSeconds = Math.floor(diffMs / 1000);

  const currentProgress = totalSeconds % (24 * 60 * 60);

  const days = Math.floor(totalSeconds / ONE_DAY_IN_SECONDS);
  const hours = Math.floor((totalSeconds % ONE_DAY_IN_SECONDS) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    currentProgress,
  };
};

export interface History {
  different: string;
  from: string;
  to: string;
}
export const getHistory = (list: List) => {
  const historys: History[] = [];
  // let startPoint: number;

  list.forEach((value, index, array) => {
    if (index === 0) {
      // startPoint = value;
      return;
    }

    const { days, hours, minutes, seconds } = extractDateTime(
      array[index - 1],
      value,
    );

    const diff = `${days} days ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    const from = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(array[index - 1]);

    const to = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(value);

    historys.push({ different: diff, from, to });
  });

  return historys;
};
