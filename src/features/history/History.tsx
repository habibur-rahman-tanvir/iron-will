import { MdDeleteForever } from "react-icons/md";
import ActionBar from "../../shared/components/ActionBar";
import { useHistory } from "./hook/history.hook";

const History = () => {
  const { histories, handleClearHistory } = useHistory();

  return (
    <div className="flex flex-col h-dvh">
      <div>
        <ActionBar title="History" allowBackpress={true}>
          <MdDeleteForever
            className="text-2xl active:opacity-55"
            onClick={handleClearHistory}
          />
        </ActionBar>
      </div>

      <div className="flex-1 relative empty:after:content-['No_History'] after:absolute after:text-gray-400 after:font-bold after:italic after:top-1/3 after:text-3xl after:inset-x-0 after:text-center overflow-y-scroll dark:bg-black">
        {histories.reverse().map((item, index) => {
          return (
            <div
              key={index}
              className="px-2 dark:bg-gray-950 pt-2 pb-6 border-b border-b-gray-400 mx-0.5"
            >
              <p className="font-mono text-xl font-bold dark:text-white/80">
                {item.different}
              </p>
              <div>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {item.from} -{">"} {item.to}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
