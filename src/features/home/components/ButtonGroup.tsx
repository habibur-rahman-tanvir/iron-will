import { FaGithub } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { Link } from "react-router";

const ButtonGroup = () => {
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col items-center">
        <Link
          className="contents"
          to={"https://github.com/habibur-rahman-tanvir"}
          target="_blank"
        >
          <span className="p-3 text-2xl border-2 border-gray-300 dark:text-white rounded-3xl">
            <FaGithub />
          </span>
        </Link>
        <span className="font-semibold text-gray-600 dark:text-gray-200">
          Visits
        </span>
      </div>
      <div className="flex flex-col items-center">
        <Link className="contents" to={"/history"}>
          <span className="p-3 text-2xl border-2 border-gray-300 dark:text-white rounded-3xl">
            <MdHistory />
          </span>
        </Link>
        <span className="font-semibold text-gray-600 dark:text-gray-200">
          History
        </span>
      </div>
    </div>
  );
};

export default ButtonGroup;
