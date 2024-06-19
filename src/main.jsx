import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import CapiUserContext from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CapiUserContext>
      <RouterProvider router={routes} />
    </CapiUserContext>
  </React.StrictMode>
);
