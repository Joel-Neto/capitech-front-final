import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import UserController from "../controllers/UserController";
Private.propTypes = {
  children: PropTypes.node,
};

export default function Private({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
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
        } 
        else {
          alert(`Erro: ${result.message}`);
          return navigate("/login");
        }
      } catch (error) {
        alert(`Erro: ${error.message}`);
        return navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchData()
  }, [navigate]);

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  if (!authenticated) {
    return navigate("/login");
  }
  // if (!authenticated) {
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
}
