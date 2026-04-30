import { RouterProvider } from "react-router";
import { router } from "./router.tsx";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
