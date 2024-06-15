import propTypes from "prop-types";

import html from "../../assets/img/home/trails/html.png";
import javascript from "../../assets/img/home/trails/javascript.png";
import css from "../../assets/img/home/trails/css.png";

export const HomeTrailImage = ({ trailName }) => {
  const chooseImage = (name) => {
    switch (name.toLowerCase()) {
      case "html5":
        return html;
      case "javascript":
        return javascript;
      case "css":
        return css;

      default:
        return null;
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
