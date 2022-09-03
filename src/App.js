import { useRoutes } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/system";
import LandingPage from "./Pages/LandingPage/LandingPage";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
  ];

  const allRoutes = useRoutes(routes);

  return (
    <div>
      <Box>{allRoutes}</Box>
    </div>
  );
};

export default App;
