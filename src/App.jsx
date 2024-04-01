import { createBrowserRouter, RouterProvider } from "react-router-dom";
import I18nComponent from "./i18n/I18nComponent";
// import "/app.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <I18nComponent />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
