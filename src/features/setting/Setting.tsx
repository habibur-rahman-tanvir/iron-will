import ActionBar from "../../shared/components/ActionBar";

const Setting = () => {
  return (
    <div className="flex flex-col h-dvh">
      <div>
        <ActionBar title="Setting" allowBackpress={true} />
      </div>

      <div className="flex-1">
        <p>Setting</p>
      </div>
    </div>
  );
};

export default Setting;
