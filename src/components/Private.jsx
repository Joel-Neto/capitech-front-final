import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import UserController from "../controllers/UserController";
import { userContext } from "../contexts/UserContext";
Private.propTypes = {
  children: PropTypes.node,
};

export default function Private({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const {logout} = useContext(userContext)
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return navigate("/login");
    }

    const userController = new UserController();

    const fetchData = async () => {
      try {
        const result = await userController.validateToken(token);

        if (result.success) {
          setAuthenticated(true);
        } else {
          alert(`Erro: ${result.message}`);
          logout();
          return navigate("/login");
        }
      } catch (error) {
        alert(`Erro: ${error.message}`);
        logout();
        return navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, logout]);

  if (loading) {
    return (
      <main className="w-full h-screen flex justify-center items-center text-center">
        <h1 className="text-2xl font-headline font-semibold">Carregando dados...</h1>
      </main>
    );
  }

  if (!authenticated) {
    return navigate("/login");
  }

  return <>{children}</>;
}
