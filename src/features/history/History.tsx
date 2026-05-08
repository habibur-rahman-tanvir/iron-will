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

      <div className="flex-1 overflow-y-scroll">
        {histories.reverse().map((item, index) => {
          return (
            <div
              key={index}
              className="px-2 pt-1 pb-2.5 border-b border-b-gray-400 mx-0.5"
            >
              <p className="font-bold text-xl">{item.different}</p>
              <div>
                <p className="font-light text-gray-500">
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
