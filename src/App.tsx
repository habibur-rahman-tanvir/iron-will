import { RouterProvider } from "react-router";
import { router } from "./router.tsx";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark",
    );
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
