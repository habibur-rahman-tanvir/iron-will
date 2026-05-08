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
        <span className="transition-colors duration-200 dark:text-white">
          Dark Theme
        </span>
        <span
          aria-checked={isChecked}
          className="
          bg-gray-400
          w-10 h-5 
          rounded-full relative before:absolute before:aspect-square
          before:-inset-y-0.5 before:rounded-full  before:bg-blue-500
          before:transition-all before:duration-300 before:ease-in-out
          before:left-0 aria-checked:before:left-5
          "
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

// import { useState, type ChangeEvent } from "react";
// import { isThemeDark, setTheme } from "../../../utilities/theme";

// const ThemeButton = () => {
//   const [isChecked, setIsChecked] = useState<boolean>(isThemeDark());

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.checked) {
//       setIsChecked(true);
//       setTheme("dark");
//     } else {
//       setIsChecked(false);
//       setTheme("light");
//     }
//   };

//   return (
//     <div className="p-1.5">
//       <label
//         className="flex items-center justify-between text-xl font-semibold"
//         htmlFor="btn-theme"
//       >
//         <span className="transition-colors duration-200 dark:text-white">
//           Dark Theme
//         </span>
//         <span
//           aria-checked={isChecked}
//           className="
//             bg-gray-400 aria-checked:bg-blue-500
//             transition-colors duration-300
//             w-10 h-5 rounded-full relative
//             before:absolute before:aspect-square before:-inset-y-0.5 before:rounded-full
//             before:left-0 aria-checked:before:left-5
//             before:bg-gray-400
//             before:transition-all before:duration-300 before:ease-in-out
//           "
//         ></span>
//       </label>
//       <input
//         onChange={handleChange}
//         className="sr-only"
//         type="checkbox"
//         id="btn-theme"
//       />
//     </div>
//   );
// };

// export default ThemeButton;
