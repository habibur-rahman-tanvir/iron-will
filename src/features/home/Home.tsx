import { IoSettingsSharp } from "react-icons/io5";
import ActionBar from "../../shared/components/ActionBar";
import { useNavigate } from "react-router";
import Adviced from "./components/Adviced";
import ButtonGroup from "./components/ButtonGroup";
import Counter from "./components/Counter";

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
          <Counter />
          <Adviced />
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default Home;
