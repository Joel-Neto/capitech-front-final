import { Link, useLocation } from "react-router-dom";

export const AdminBreadcrumb = () => {
  const { pathname } = useLocation();

  const links = [
    {
      link: "/admin",
      text: "Trilhas",
    },
    {
      link: "/admin/trilhas/novatrilha",
      text: "Nova trilha",
    },
    {
      link: "/admin/usuarios",
      text: "Usuários",
    },
    {
      link: "/admin/desenvolvimento",
      text: "Área de desenvolvimento",
    },
  ];

  return (
    <div className="py-5 flex items-center justify-center gap-5 font-headline font-semibold text-md border-b-2">
      {links.map((value, i) => (
        <Link
          key={`key-${i}`}
          to={value.link}
          className={`${pathname === value.link ? "underline font-bold" : ""}`}
        >
          {value.text}
        </Link>
      ))}
    </div>
  );
};
