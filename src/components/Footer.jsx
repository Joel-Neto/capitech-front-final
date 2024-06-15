import { Link } from "react-router-dom";
import capitechLogo from "../assets/img/capitech_logo.png";

export const Footer = () => {
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
    <footer className="bg-capi_purple p-5">
      <div className="container mx-auto max-w-5xl text-white mb-3">
        <div className="flex items-center justify-center ">
          <h4 className="font-headline text-3xl font-bold">Capi</h4>
          <img src={capitechLogo} alt="logo capitech" className="w-12" />
          <h4 className="font-headline text-3xl font-bold">Tech</h4>
        </div>
      </div>
      <div className="text-center">
        <ul className="flex flex-col gap-2 text-sm">
          {links.map((link, i) => (
            <li key={`link-${i}`}>
              <Link to={link.to} className="menuLinks">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
