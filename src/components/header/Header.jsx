import { useState } from "react";
import { HeaderModal } from "./HeaderModal";

import capitechLogo from "../../assets/img/capitech_logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showAndCloseModal = () => {
    setModalOpen((previousValue) => !previousValue);
  };

  return (
    <header className="relative bg-capi_purple min-h-64 py-10 px-4 text-white">
      <button
        className="absolute left-4 top-4 transition-all text-white hover:text-gray-300"
        onClick={showAndCloseModal}
      >
        <IoMenu size={32} className="pointer-events-none" />
      </button>
      <div className="container flex flex-col items-center justify-center mx-auto max-w-4xl">
        <Link to="/">
          <div className="flex items-center justify-center ">
            <h1 className="font-headline text-4xl font-bold sm:text-6xl">
              Capi
            </h1>
            <img
              src={capitechLogo}
              alt="logo capitech"
              className="w-16 sm:w-24"
            />
            <h1 className="font-headline text-4xl font-bold sm:text-6xl">
              Tech
            </h1>
          </div>
        </Link>

        <h2 className="font-headline text-center text-2xl font-bold">
          Aprendendo com <br /> quem aprende!
        </h2>
      </div>

      {modalOpen && <HeaderModal showAndCloseModal={showAndCloseModal} />}
    </header>
  );
};
