import { IoSettingsSharp } from "react-icons/io5";
import ActionBar from "../../shared/components/ActionBar";
import { Link, useNavigate } from "react-router";

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

      <div className="flex-1">
        <p>Content</p>
        <p>
          <Link to={"/history"}>History</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
