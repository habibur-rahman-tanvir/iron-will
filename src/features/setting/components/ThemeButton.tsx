import { useState, type ChangeEvent } from "react";
import { isThemeDark, setTheme } from "../../../utilities/theme";

const ThemeButton = () => {
  const [isChecked, setIsChecked] = useState<boolean>(isThemeDark());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsChecked(true);
      setTheme("dark");
    } else {
      setIsChecked(false);
      setTheme("light");
    }
  };

  return (
    <div className="p-1.5">
      <label
        className="flex items-center justify-between text-xl font-semibold"
        htmlFor="btn-theme"
      >
        <span className="dark:text-white">Dark Theme</span>
        <span
          aria-checked={isChecked}
          className="bg-gray-400 w-10 h-5 rounded-full relative before:absolute before:aspect-square before:-inset-y-0.5 before:rounded-full left-0 aria-checked:before:right-0 before:bg-blue-500"
        ></span>
      </label>
      <input
        onChange={handleChange}
        className="sr-only"
        type="checkbox"
        id="btn-theme"
      />
    </div>
  );
};

export default ThemeButton;
