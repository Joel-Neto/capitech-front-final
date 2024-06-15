import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Contact } from "./views/Contact";
import { Fatec } from "./views/Fatec";
import { About } from "./views/About";

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
        element: <Login />
      },
      {
        path: "cadastro",
        element: <Register />
      },
      {
        path: "contato",
        element: <Contact />
      },
      {
        path: "vestibular",
        element: <Fatec />
      },
      {
        path: "sobre",
        element: <About />
      }
    ],
  },
]);

export default routes;
