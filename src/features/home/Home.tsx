import { IoSettingsSharp } from "react-icons/io5";
import ActionBar from "../../shared/components/ActionBar";
import { Link, useNavigate } from "react-router";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdHistory } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

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
          <p className="text-center mt-6 mb-2.5 text-gray-600">
            "Regret of neglected opportunity is the worst hell that a living
            soul can inhabit."
          </p>
          <p className="text-center mb-6 text-gray-600">-Rafael Sabatini</p>
          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <Link
                className="contents"
                to={"https://github.com/habibur-rahman-tanvir"}
                target="_blank"
              >
                <span className="border-gray-300 border-2 text-2xl p-3 rounded-3xl">
                  <FaGithub />
                </span>
              </Link>
              <span className="font-semibold text-gray-600">Visits</span>
            </div>
            <div className="flex flex-col items-center">
              <Link className="contents" to={"/history"}>
                <span className="border-gray-300 border-2 text-2xl p-3 rounded-3xl">
                  <MdHistory />
                </span>
              </Link>
              <span className="font-semibold text-gray-600">History</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
