import { IoSettingsSharp } from "react-icons/io5";
import ActionBar from "../../shared/components/ActionBar";
import { useNavigate } from "react-router";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-dvh">
      <div>
        <ActionBar title="Iron Will">
          <IoSettingsSharp
            className="text-2xl active:opacity-55"
            onClick={() => navigate("/setting")}
          />
        </ActionBar>
      </div>

      <div className="flex-1 flex justify-center dark:bg-gray-800 items-center">
        <div className="w-[75%] max-w-lg">
          <CircularProgressbarWithChildren
            maxValue={100}
            value={87}
            strokeWidth={3}
            styles={buildStyles({
              strokeLinecap: "butt",
            })}
          >
            <div className="flex flex-col items-center gap-3">
              <p className="text-3xl font-bold dark:text-white">2 days</p>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                00:00:00
              </p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default Home;
