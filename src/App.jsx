import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUS";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Layout from "./Components/Layout/Layout";

function App() {
  // Creating Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <AboutUs />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
