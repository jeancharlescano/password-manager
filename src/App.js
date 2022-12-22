import { Welcome } from "./screen/Welcome/Welcome.jsx";
import { Home } from "./screen/Home/Home.jsx";
import { Detail } from "./screen/Detail/Detail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
