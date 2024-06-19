import propTypes from "prop-types";
import { createContext } from "react";
import { jwtDecode } from "jwt-decode";

export const userContext = createContext();

const CapiUserContext = ({children}) => {

  const saveUserDataOnStorage = (data) => {
    const decodedUser = jwtDecode(data);
    sessionStorage.setItem("user", JSON.stringify(decodedUser));
    sessionStorage.setItem("token", data);
  };

  const getUserDataFromStorage = () => {
    return JSON.parse(sessionStorage.getItem("user"));
  }
  
  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  };
  
  const values = {
    saveUserDataOnStorage,
    getUserDataFromStorage,
    logout
  }
  return <>
    <userContext.Provider value={values}>{children}</userContext.Provider>
  </>
}

CapiUserContext.propTypes = {
  children: propTypes.node
}

export default CapiUserContext;