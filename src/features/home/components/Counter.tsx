import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { VscRocket } from "react-icons/vsc";
import { isThemeDark } from "../../../utilities/theme";
import { useCounter } from "../hook/counter.hook";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

const Counter = () => {
  const {
    MAX_PROGRESS,
    runningStatus,
    handleReset,
    daysHoursMinsSec: { days, hours, minutes, seconds, currentProgress },
  } = useCounter();

  return (
    <div className="relative">
      <CircularProgressbarWithChildren
        maxValue={MAX_PROGRESS}
        value={currentProgress}
        strokeWidth={3}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: isThemeDark() ? "#009966" : "auto",
        })}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-3xl font-bold dark:text-white">{days} days</p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
        </div>
      </CircularProgressbarWithChildren>
      <button
        className="absolute bottom-0 right-0 px-4 py-1 text-2xl text-white bg-linear-to-r ring-1 active:scale-95 active:opacity-75 ring-black from-pink-800 to-red-600 rounded-2xl"
        onClick={handleReset}
      >
        {!runningStatus ? <VscRocket /> : <PiClockCounterClockwiseBold />}
      </button>
    </div>
  );
};

export default Counter;
