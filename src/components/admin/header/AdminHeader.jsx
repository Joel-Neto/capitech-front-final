import { useState } from "react";
import { HeaderModal } from "../../header/HeaderModal";
import { IoMenu } from "react-icons/io5";

export const AdminHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showAndCloseModal = () => {
    setModalOpen((previousValue) => !previousValue);
  };

  return (
    <header className="relative bg-capi_purple py-16 px-4 text-white">
      <button
        className="absolute left-4 top-4 transition-all text-white hover:text-gray-300"
        onClick={showAndCloseModal}
      >
        <IoMenu size={32} className="pointer-events-none" />
      </button>
      <div className="container flex flex-col items-center justify-center text-center mx-auto max-w-4xl h-full">
        <h1 className="font-headline text-4xl font-bold mb-5 sm:text-5xl">
          Área Administrativa CapiTech
        </h1>

        <h2 className="font-headline text-center text-2xl font-bold">
          Seja bem vindo,
        </h2>
      </div>

      {modalOpen && <HeaderModal showAndCloseModal={showAndCloseModal} />}
    </header>
  );
};
