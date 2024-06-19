import { useContext, useState } from "react";

import { HeaderModal } from "../../header/HeaderModal";
import { userContext } from "../../../contexts/UserContext";

import { IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const AdminHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { getUserDataFromStorage, logout } = useContext(userContext);
  const navigate = useNavigate();
  const user = getUserDataFromStorage();

  const showAndCloseModal = () => {
    setModalOpen((previousValue) => !previousValue);
  };

  const logoutAndGoToHome = () => {
    if (confirm("Deseja sair do sistema?")) {
      logout();
      return navigate("/");
    }
  };

  return (
    <header className="relative bg-capi_purple py-16 px-4 text-white">
      <button
        className="absolute left-4 top-4 transition-all text-white hover:text-gray-300"
        onClick={showAndCloseModal}
      >
        <IoMenu size={32} className="pointer-events-none" />
      </button>
      <button
        className="absolute right-6 top-6 transition-all text-white hover:text-gray-300"
        onClick={logoutAndGoToHome}
      >
        <MdLogout size={32} className="pointer-events-none" />
      </button>
      <div className="container flex flex-col items-center justify-center text-center mx-auto max-w-4xl h-full">
        <h1 className="font-headline text-4xl font-bold mb-5 sm:text-5xl">
          Área Administrativa CapiTech
        </h1>

        <h2 className="font-headline text-center text-xl font-bold sm:text-2xl">
          Seja bem vindo, {user && user?.name}
        </h2>
      </div>

      {modalOpen && <HeaderModal showAndCloseModal={showAndCloseModal} />}
    </header>
  );
};
