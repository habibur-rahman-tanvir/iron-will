import { MdDeleteForever } from "react-icons/md";
import ActionBar from "../../shared/components/ActionBar";

const History = () => {
  return (
    <div className="flex flex-col h-dvh">
      <div>
        <ActionBar title="History" allowBackpress={true}>
          <MdDeleteForever className="text-2xl active:opacity-55" />
        </ActionBar>
      </div>

      <div className="flex-1">
        <p>History</p>
      </div>
    </div>
  );
};

export default History;
