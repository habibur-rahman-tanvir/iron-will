import type { ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";

type ActionBarProps = {
  title: string;
  children?: ReactNode;
  allowBackpress?: boolean;
};

const ActionBar = ({
  title,
  children,
  allowBackpress = false,
}: ActionBarProps) => {
  const handleBackpress = () => {
    if (!allowBackpress) return;
    window.history.back();
  };

  return (
    <div className="bg-sky-950 text-white px-2.5 py-2 flex items-center">
      <div className="flex-1 flex items-center">
        {allowBackpress && (
          <button
            className="text-2xl mr-2.5 active:opacity-55"
            onClick={handleBackpress}
          >
            <IoIosArrowBack className="inline-block" />
          </button>
        )}
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ActionBar;
