import propTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const HeaderModal = ({showAndCloseModal}) => {
  const links = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Fatec Votorantim",
      to: "/vestibular",
    },
    {
      text: "Contato",
      to: "/contato",
    },
    {
      text: "Sobre",
      to: "/sobre",
    },
  ];
  return (
    <div
      className="absolute z-['9999'] top-0 left-0 bg-black w-64  rounded-e-xl"
    >
      <div className="relative w-full h-full rounded-e-xl py-10 px-5">
        <button className="absolute right-4 top-4" onClick={showAndCloseModal}>
          <IoClose size={25} className="pointer-events-none"  />
        </button>

        <ul className="flex flex-col gap-2 text-lg">
          {links.map((link, i) => (
            <li key={`link-${i}`}>
              <Link to={link.to} className="menuLinks">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

HeaderModal.propTypes = {
  showAndCloseModal: propTypes.func.isRequired
}
