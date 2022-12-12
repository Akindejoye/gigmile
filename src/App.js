import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Capital from "./pages/capital";
import Captains from "./pages/Captains";
import Dashboard from "./pages/dashboard/index";
import ServiceRequests from "./pages/ServiceRequests";
import AssetFinancing from "./pages/AssetFinancing/index";
import AnciliaryServices from "./pages/AnciliaryServices/index";
import ServicePartners from "./pages/ServicePartners/index";
import AssetMetrics from "./pages/AssetMetrics/index";
import Settings from "./pages/Settings/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/captains",
        element: <Captains />,
      },
      {
        path: "/requests",
        element: <ServiceRequests />,
      },
      {
        path: "/financing",
        element: <AssetFinancing />,
      },
      {
        path: "/services",
        element: <AnciliaryServices />,
      },
      {
        path: "/partners",
        element: <ServicePartners />,
      },
      {
        path: "/metrics",
        element: <AssetMetrics />,
      },
      {
        path: "/repayments",
        element: <AssetMetrics />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/capital",
        element: <Capital />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
