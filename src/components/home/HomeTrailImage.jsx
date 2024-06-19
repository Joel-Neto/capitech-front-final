import propTypes from "prop-types";

import capi from "../../assets/img/capitech_logo.png"
import html from "../../assets/img/home/trails/html.png";
import javascript from "../../assets/img/home/trails/javascript.png";
import css from "../../assets/img/home/trails/css.png";
import sql from "../../assets/img/home/trails/sql.png";

export const HomeTrailImage = ({ trailName }) => {
  const chooseImage = (name) => {
    switch (name.toLowerCase()) {
      case "html5":
        return html;
      case "javascript":
        return javascript;
      case "css":
        return css;
      case "sql":
        return sql;
      default:
        return capi;
    }
  };

  return (
    <img
      className="w-40 mb-5"
      src={chooseImage(trailName)}
      alt={`Imagem ${trailName}`}
    />
  );
};

HomeTrailImage.propTypes = {
  trailName: propTypes.string.isRequired,
};
