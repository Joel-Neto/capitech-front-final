import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Contact } from "./views/Contact";
import { Fatec } from "./views/Fatec";
import { About } from "./views/About";
import { Trail } from "./views/Trail";
import { AdminLayout } from "./views/admin/AdminLayout";
import { AdminTrails } from "./views/admin/AdminTrails";
import { AdminUsers } from "./views/admin/AdminUsers";
import Private from "./components/Private";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastro",
        element: <Register />,
      },
      {
        path: "contato",
        element: <Contact />,
      },
      {
        path: "vestibular",
        element: <Fatec />,
      },
      {
        path: "sobre",
        element: <About />,
      },
      {
        path: "trilha/:id",
        element: <Trail />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Private>
        <AdminLayout />
      </Private>
    ),
    children: [
      {
        index: true,
        element: <AdminTrails />,
      },
      {
        path: "usuarios",
        element: <AdminUsers />,
      },
    ],
  },
]);

export default routes;
