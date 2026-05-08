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
