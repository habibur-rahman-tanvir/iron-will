import { KEYS } from "../../constants/constant";
import ActionBar from "../../shared/components/ActionBar";
import ThemeButton from "./components/ThemeButton";

const Setting = () => {
  return (
    <div className="flex flex-col h-dvh">
      <div>
        <ActionBar title="Setting" allowBackpress={true} />
      </div>

      <div className="flex-1 dark:bg-gray-800">
        <ThemeButton />
        <p>Start date and time</p>
        <p onClick={() => localStorage.removeItem(KEYS.STARTED_AT)}>Clear</p>
      </div>
    </div>
  );
};

export default Setting;
